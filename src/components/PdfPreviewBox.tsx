// src/components/PdfPreviewBox.tsx
'use client';

import { useState } from 'react';
import { Download, Eye, X } from 'lucide-react';

export default function PdfPreviewBox({ fileUrl }: { fileUrl: string | null | undefined }) {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <>
      {/* The Action Box */}
      <div className="bg-slate-900 rounded-2xl p-8 text-center w-full md:w-80 shrink-0 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-5">
          <Download size={100} />
        </div>
        <h3 className="text-white text-xl font-bold mb-3 relative z-10">Sample DQ Report</h3>
        <p className="text-slate-400 text-sm mb-6 relative z-10">Review our meticulous documentation standards.</p>

        {fileUrl ? (
          <div className="flex flex-col gap-3 relative z-10">
            {/* Preview Button */}
            <button
              onClick={() => setShowPreview(true)}
              className="bg-slate-800 hover:bg-slate-700 text-white w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all"
            >
              <Eye size={18} /> Preview Document
            </button>

            {/* Download Button */}
            <a
              href={fileUrl}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-500 text-white w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-600/30"
            >
              <Download size={18} /> Download PDF
            </a>
          </div>
        ) : (
          <button
            disabled
            className="bg-slate-800 text-slate-500 w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 cursor-not-allowed relative z-10"
          >
            File Not Uploaded
          </button>
        )}
      </div>

      {/* The Full-Screen PDF Modal */}
      {showPreview && fileUrl && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/90 backdrop-blur-sm p-4 md:p-10">
          <div className="bg-white rounded-2xl w-full max-w-5xl h-full max-h-[90vh] flex flex-col overflow-hidden shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-200 bg-slate-50">
              <h3 className="font-bold text-slate-900 flex items-center gap-2">
                <FileCheck className="text-blue-600" size={20}/>
                Sample_DQ_Report.pdf
              </h3>
              <button
                onClick={() => setShowPreview(false)}
                className="p-2 hover:bg-slate-200 rounded-full transition-colors text-slate-500 hover:text-red-500"
              >
                <X size={24} />
              </button>
            </div>

            {/* The actual PDF Embed */}
            <div className="flex-grow w-full h-full bg-slate-200">
              <iframe
                src={`${fileUrl}#view=FitH`}
                className="w-full h-full border-none"
                title="PDF Preview"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Just importing this up here so the icon in the header works
import { FileCheck } from 'lucide-react';