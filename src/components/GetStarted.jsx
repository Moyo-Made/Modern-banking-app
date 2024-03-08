// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "../styles";
import { arrowUp } from "../assets";

const GetStarted = () => {
	return (
		<div
			className={`${styles.flexCenter} w-[120px] h-[120px] rounded-full bg-blue-gradient
      p-[0.18rem] cursor-pointer`}
		>
			<div
				className={`${styles.flexCenter} flex-col bg-primary w-full h-full rounded-full`}
			>
				<div className={`${styles.flexStart} flex-row`}>
					<p className="font-poppins font-semibold text-[18px] leading-[23px] mr-2">
						<span className="text-gradient">Get</span>
					</p>
					<img
						src={arrowUp}
						alt="arrow"
						className="w-[23px] h-[23px] object-contain"
					/>
				</div>
        <p className="font-poppins font-semibold text-[18px] leading-[23px]">
						<span className="text-gradient">Started</span>
					</p>
			</div>
		</div>
	);
};

export default GetStarted;
