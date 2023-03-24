import React from "react";
import { Form } from "react-router-dom";

const ActionModal = ({ close, data, deleteBudget }) => {
  return (
    <>
      <div className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity font-raleway">
        <div className="fixed inset-0 z-10 overflow-y-auto flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all sm:my-8 w-full sm:max-w-lg">
            <Form />
          </div>
        </div>
      </div>
    </>
  );
};

export default ActionModal;
