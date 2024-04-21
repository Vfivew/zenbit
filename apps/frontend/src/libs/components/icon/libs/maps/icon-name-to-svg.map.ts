import BurgerIcon from "~/assets/icons/burger.svg?react";
import EyeIcon from "~/assets/icons/eye.svg?react";
import EyeOffIcon from "~/assets/icons/eye-off.svg?react";
import Facebook from "~/assets/icons/facebook.svg?react";
import LinkedIn from "~/assets/icons/linkedin.svg?react";
import LogOutIcon from "~/assets/icons/log-out.svg?react";
import Twitter from "~/assets/icons/twitter.svg?react";
import { type IconName } from "~/libs/types/types.js";

const iconNameToSvg: Record<
	IconName,
	React.FC<React.SVGProps<SVGSVGElement>>
> = {
	burger: BurgerIcon,
	eye: EyeIcon,
	eyeOff: EyeOffIcon,
	facebook: Facebook,
	linkedin: LinkedIn,
	logOut: LogOutIcon,
	twitter: Twitter,
};

export { iconNameToSvg };
