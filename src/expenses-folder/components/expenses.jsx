import React from "react";
import { Layout, Menu } from "antd";

const { Header } = Layout;

const Expenses = () => {
  return (
    <>
      <Layout>
        <Header
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            background: "none",
            display: "flex",
            justifyContent: "flex-end",
            zIndex: "1",
          }}
          className="travel_header"
        >
          <div className="travel_header_logo">
            <h1>Travel</h1>
          </div>
          <Menu mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item>Destinations</Menu.Item>
            <Menu.Item>Flights</Menu.Item>
            <Menu.Item>Services</Menu.Item>
            <Menu.Item>Packages</Menu.Item>
            <Menu.Item>Reviews</Menu.Item>
            <Menu.Item>Blogs</Menu.Item>
          </Menu>
        </Header>
        {/* {bgImages.map((item, i) => (
						<div className="bg-image">
							<img src={item?.bgimg} style={{ width: '100%' }} />
							<div className="travel_header_text">
								<p> Manojcghcy </p>
							</div>
						</div>
					))} */}
      </Layout>
    </>
  );
};

export default Expenses;
