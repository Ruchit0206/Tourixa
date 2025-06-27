import React from 'react';
import { ConfirmDialog } from 'primereact/confirmdialog';

export default function ReportConfirmDialog({ visible, onConfirm, onHide }) {
  return (
    <ConfirmDialog
      visible={visible}
      onHide={onHide}
      message={
        <div className="text-gray-700 text-base leading-relaxed">
          Are you sure you want to <span className="font-semibold text-red-600">report</span> this post?
        </div>
      }
      header={
        <div className="flex items-center gap-3">
          <i className="pi pi-exclamation-triangle text-3xl text-red-600"></i>
          <span className="text-xl font-bold text-gray-900">Report Confirmation</span>
        </div>
      }
      acceptLabel="Yes"
      rejectLabel="No"
      accept={onConfirm}
      reject={onHide}
      acceptClassName="p-button-danger p-button-text px-6 py-3 rounded-lg shadow-md"
      rejectClassName="p-button-secondary p-button-text px-6 py-3 rounded-lg shadow-sm"
      className="shadow-lg rounded-xl"
    />
  );
}
