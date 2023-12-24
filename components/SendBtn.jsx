import React from "react";
import { useFormStatus } from "react-dom";
import SendIcon from '@mui/icons-material/Send';

const SendBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit{" "}
          <SendIcon className="text-base opacity-70 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
        </>
      )}
    </button>
  );
};

export default SendBtn;
