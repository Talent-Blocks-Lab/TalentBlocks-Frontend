import { Link } from "react-router-dom";

const Logo = ({ img, color, fontSize, fontWeight }) => {
  return (
    <Link href="/">
      <div className="items-center gap-3 flex mr-20">
        <img src={`${img}`} alt="TalentBlocks Labs logo" width={120} height={36} />
      </div>
    </Link>
  );
};

export default Logo;
