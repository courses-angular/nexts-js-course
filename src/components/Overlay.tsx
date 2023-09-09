interface BackdropProps {
  onClick: () => void;
}

const Overlay = ({ onClick }: BackdropProps) => {
  return <div className="backdrop" onClick={onClick} />;
};
export default Overlay;
