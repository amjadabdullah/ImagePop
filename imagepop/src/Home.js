import React, { useState } from "react";
import data from "./data";
import Model from "./Model";




const Home = () => {
	const [model, setModel] = useState(false);
	const [tempdata, setTempdata] = useState([]);

	const getData = (img, title, desc1 , desc2 , desc3) => {
		let tempData = [img, title, desc1, desc2 , desc3];
		setTempdata((item) => [1, ...tempData]);

		return setModel(true);
	};

	return (
		<>
			{/* <h1>Home </h1> */}

			<section  id="services" className="py-4 py-lg container" >
				<div className="row justify-content-center align-item-center" >
					{data.cardData.map((item, index) => {
						return (
							<div
								className="col-11 col-md-3 col-lg-3 mx-1 mb-3"
								key={index}
							>
								<div className="card p-0 overflow-hidden h-100 shadow "  >
									<img
										src={item.imgSrc}
										className="card-img-top"
										alt=""
									/>

									<div className="card-body">
										<h5 className="card-title">{item.title}</h5>
										<p className="card-text"></p>
										<button
											className="btn btn-primary"
											onClick={() =>
												getData(item.imgSrc,item.title, item.desc1, item.desc2,item.desc3)
											}
										>
											{" "}
											Click me{" "}
										</button>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</section> 
			{model === true ? (
				<Model
					img={tempdata[1]}
					title={tempdata[2]}
					desc1={tempdata[3]}
                    desc2={tempdata[4]}
                    desc3={tempdata[5]}
					hide={() => setModel(false)}
				/>
			) : (
				" "
			)}
		</>
	);
};

export default Home;
