import React, { useState } from 'react';
import { 
  X, 
  UploadCloud, 
  FileCheck, 
  AlertCircle, 
  CheckCircle2, 
  ShoppingCart, 
  FileText,
  ShieldCheck
} from 'lucide-react';

export default function ArtworkUploaderModal({ isOpen, onClose, onAddToCart }) {
  if (!isOpen) return null;

  const [uploadedFile, setUploadedFile] = useState(null);
  const [productType, setProductType] = useState('Standard Business Cards (100 pcs)');
  const [quantity, setQuantity] = useState(250);
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const [proofCheck, setProofCheck] = useState(true);

  const handleSimulatedUpload = (fileName) => {
    setUploadedFile({
      name: fileName,
      size: '14.2 MB',
      type: fileName.split('.').pop().toUpperCase(),
      status: 'Ready for Press (CMYK 300 DPI Verified)'
    });
  };

  const handleAddToCart = () => {
    if (!uploadedFile) return;

    onAddToCart({
      id: `uploaded-${Date.now()}`,
      productId: 'custom-artwork',
      name: `Custom Artwork Print - ${productType}`,
      quantity: quantity,
      price: productType.includes('Standee') ? 899 : productType.includes('Banner') ? 499 : 449,
      image: 'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=400&q=80',
      specs: {
        file: uploadedFile.name,
        format: uploadedFile.type,
        instructions: specialInstructions || 'Print as provided in CMYK scale',
        proofRequested: proofCheck ? 'Yes (WhatsApp proof before printing)' : 'Direct print'
      }
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-2xl overflow-hidden flex flex-col">
        
        {/* Header */}
        <div className="px-6 py-4 bg-navy-950 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-brand-500/20 text-brand-400 flex items-center justify-center">
              <UploadCloud className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold font-display text-white">
                Upload Your Ready-To-Print Artwork
              </h3>
              <p className="text-xs text-slate-300">
                Supports CorelDraw (.CDR), Photoshop (.PSD), Illustrator (.AI), PDF & High-Res PNG
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 space-y-5">
          
          {/* Target Product Selection */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
              Select Product Category
            </label>
            <select
              value={productType}
              onChange={(e) => setProductType(e.target.value)}
              className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:bg-white focus:ring-2 focus:ring-brand-500 outline-none"
            >
              <option>Standard Business Cards (100 pcs - ₹199)</option>
              <option>Premium Visiting Cards (250 pcs - ₹449)</option>
              <option>Promotional Flyers A5 (500 pcs - ₹699)</option>
              <option>Roll-Up Standee 2.5ft x 6ft (1 pc - ₹899)</option>
              <option>Vinyl Waterproof Flex Banner (₹349)</option>
              <option>Custom Vinyl Stickers (100 pcs - ₹399)</option>
            </select>
          </div>

          {/* Drag & Drop Upload Zone */}
          <div
            onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={(e) => {
              e.preventDefault();
              setIsDragging(false);
              const files = e.dataTransfer.files;
              if (files && files[0]) {
                handleSimulatedUpload(files[0].name);
              }
            }}
            onClick={() => handleSimulatedUpload('Shree_Final_VisitingCard_Master_CMYK.cdr')}
            className={`border-2 border-dashed rounded-2xl p-6 sm:p-8 text-center cursor-pointer transition-all ${
              isDragging
                ? 'border-brand-500 bg-brand-50'
                : uploadedFile
                ? 'border-emerald-400 bg-emerald-50/50'
                : 'border-slate-300 hover:border-brand-400 bg-slate-50/60'
            }`}
          >
            {uploadedFile ? (
              <div className="space-y-2">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <FileCheck className="w-6 h-6" />
                </div>
                <h4 className="text-sm font-bold text-slate-900">{uploadedFile.name}</h4>
                <p className="text-xs text-emerald-700 font-medium">
                  {uploadedFile.status} • {uploadedFile.size}
                </p>
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); setUploadedFile(null); }}
                  className="text-xs text-rose-600 font-semibold hover:underline"
                >
                  Remove & Choose Another
                </button>
              </div>
            ) : (
              <div className="space-y-2">
                <div className="w-12 h-12 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center mx-auto">
                  <UploadCloud className="w-6 h-6" />
                </div>
                <h4 className="text-sm font-bold text-slate-800">
                  Drag and drop your print file here, or click to browse
                </h4>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Recommended: CMYK color mode, 300 DPI resolution, 2mm bleed edge. Max size 150MB.
                </p>
                <div className="flex justify-center gap-2 pt-2 text-[11px] text-slate-400 font-mono">
                  <span className="px-2 py-0.5 bg-white border border-slate-200 rounded">CDR</span>
                  <span className="px-2 py-0.5 bg-white border border-slate-200 rounded">PDF</span>
                  <span className="px-2 py-0.5 bg-white border border-slate-200 rounded">PSD</span>
                  <span className="px-2 py-0.5 bg-white border border-slate-200 rounded">AI</span>
                </div>
              </div>
            )}
          </div>

          {/* Special Instructions & Color Proof Checkbox */}
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">
              Printing Instructions or Notes (Optional)
            </label>
            <textarea
              rows="2"
              placeholder="e.g. Please crop 2mm from top, match exact Pantone navy blue, need Urgent delivery by tomorrow evening..."
              value={specialInstructions}
              onChange={(e) => setSpecialInstructions(e.target.value)}
              className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:bg-white focus:ring-2 focus:ring-brand-500 outline-none"
            />
          </div>

          <label className="flex items-start gap-2.5 text-xs text-slate-700 cursor-pointer bg-slate-50 p-3 rounded-xl border border-slate-200">
            <input
              type="checkbox"
              checked={proofCheck}
              onChange={(e) => setProofCheck(e.target.checked)}
              className="mt-0.5 rounded text-brand-600 focus:ring-brand-500"
            />
            <div>
              <span className="font-bold text-slate-900">
                Send me a WhatsApp PDF proof before printing commences
              </span>
              <p className="text-[11px] text-slate-500">
                Our prepress engineers will inspect font outlines and bleed, then send a sample proof for your approval.
              </p>
            </div>
          </label>

          {/* Actions */}
          <div className="flex items-center justify-between pt-3 border-t border-slate-100">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-semibold text-xs hover:bg-slate-50"
            >
              Cancel
            </button>

            <button
              onClick={handleAddToCart}
              disabled={!uploadedFile}
              className={`px-6 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all ${
                uploadedFile
                  ? 'bg-brand-600 hover:bg-brand-700 text-white shadow-lg shadow-brand-500/25 active:scale-95'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'
              }`}
            >
              <ShoppingCart className="w-4 h-4" />
              <span>Add to Cart with Uploaded File</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
