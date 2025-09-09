import { Link } from "react-router-dom";

const Logo = ({ img, width, height }) => {
  return (
    <Link href="/">
        <img src={`${img}`} alt="TalentBlocks Labs logo" width={width} height={height} />
    </Link>
  );
};

export default Logo;
