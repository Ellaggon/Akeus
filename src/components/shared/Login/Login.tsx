
interface LoginProps {
  isVisible: boolean;
  onClose: () => void;
}
export const Login: React.FC<LoginProps> = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  const handleClose = (e: any) => {
    if(e.target.id === "wrapper") onClose();
  }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-10"
      onClick={handleClose}
      id="wrapper"
    >
      <div className="md:w-[600px] w-[90%] mx-auto flex flex-col">
        <button
          className="text-white text-xl place-self-end"
          onClick={() => onClose()}>X</button>
        <div className="bg-black p-2 rounded">Login</div>
      </div>
    </div>
  );
};
