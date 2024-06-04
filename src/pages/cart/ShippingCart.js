import { ConfigProvider } from "antd";
import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { Common } from "../../styles/CommonCss";
import { SButton } from "../../styles/common/reviewProductCss";
import { TableCustom } from "../../styles/common/tableCss";
import { cartCountState } from "../../atom/CountState";
import CountKey from "../../components/basic/CountKey";
import CartDeleteModal from "../../components/modal/CartDeleteModal";
import { cartPickUpGetApi } from "../../api/cartGetApi";
import { useQuery } from "react-query";
import CartAllDeleteModal from "../../components/modal/CartAllDeleteModal";
import CartOrderDelButton from "../../components/cart/CartOrderDelButton";
import CartTotalPay from "../../components/cart/CartTotalPay";
import Divider from "../../components/common/Divider";
import { BigButton, DeleteButton } from "../../styles/common/reviewProductCss";
import { useNavigate } from "react-router";

const ShippingCart = () => {
  const navigate = useNavigate();
  const [isCartDeleteModalOpen, setCartDeleteModalOpen] = useState(false);
  const [isCartAllDeleteModalOpen, setCartAllDeleteModalOpen] = useState(false);
  const [countState, setCountState] = useRecoilState(cartCountState);
  const [cartDeleteState, setCartDeleteState] = useState({});

  const { data: deliveryData } = useQuery({
    queryKey: ["cartQuery"],
    queryFn: () => cartPickUpGetApi({ shopInfo: "delivery" }),
  });

  const [userInfo, setUserInfo] = useState({
    nickname: "",
    phone: "",
    address: "",
    address2: "",
    email: "",
  });
  const [productInfo, setProductInfo] = useState([
    {
      code: "",
      name: "",
      picture: "",
      price: "",
      amount: "",
      market: "",
      delivery: "",
      address: "",
      address2: "",
    },
  ]);

  const handleCloseCartDeleteModal = () => {
    setCartDeleteModalOpen(false);
  };
  const handleOpenCartDeleteModal = data => {
    setCartDeleteState(data);
    setCartDeleteModalOpen(true);
  };

  const handleCloseCartAllDeleteModal = () => {
    setCartAllDeleteModalOpen(false);
  };
  const handleOpenCartAllDeleteModal = () => {
    setCartAllDeleteModalOpen(true);
  };
  const columnsH = [
    {
      title: "",
      dataIndex: "key",
    },
    {
      title: "이미지",
      dataIndex: "picture",
      render: (pic, record) => (
        <img style={{ width: "80px" }} src={record.picture} alt={`${pic}`} />
      ),
    },
    {
      title: "상품정보",
      dataIndex: "name",
    },
    {
      title: "매장",
      dataIndex: "marketname",
    },
    {
      title: "수량",
      dataIndex: "key",
      render: (text, record) => (
        <div
          style={{ display: "flex", justifyContent: "center" }}
          key={record.id}
        >
          {record.amount}
          {/* <CountKey id={record.key} countState={record} /> */}
        </div>
      ),
    },
    {
      title: "결제금액",
      dataIndex: "price",
      render: (_, record) => (
        <div
          style={{ display: "flex", justifyContent: "center" }}
          key={record.id}
        >
          {/* {calculatePaymentAmount(record.price, cartCount[record.key])} 원 */}
          {record.price.toLocaleString()}원
        </div>
      ),
    },
    {
      title: "삭제",
      render: record => (
        <div>
          <SButton
            onClick={() => {
              handleOpenCartDeleteModal(record);
              setCartDeleteModalOpen(true);
            }}
          >
            삭제
          </SButton>
        </div>
      ),
    },
  ];
  
  useEffect(() => {
    setCountState(deliveryData);
  }, []);

  return (
    <div>
      {isCartDeleteModalOpen && (
        <CartDeleteModal
          onClose={handleCloseCartDeleteModal}
          data={cartDeleteState}
        />
      )}
      {isCartAllDeleteModalOpen && (
        <CartAllDeleteModal onClose={handleCloseCartAllDeleteModal} />
      )}
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: Common.color.p900,
          },
          components: {
            Table: {
              headerBg: "none",
              headerColor: Common.color.p500,
            },
          },
        }}
      >
        <TableCustom
          // rowSelection={rowSelection}
          columns={columnsH}
          dataSource={deliveryData}
          pagination={false}
        />
        {/* {showModal && <RvModal onClose={handleCloseModal} />} */}
      </ConfigProvider>
      <Divider />
      <CartTotalPay cartData={deliveryData} />
      {/* <CartOrderDelButton
        handleOpenCartAllDeleteModal={handleOpenCartAllDeleteModal}
      /> */}
      <div
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        marginTop: "50px",
      }}
    >
      <div className="cart-button">
        <BigButton
          style={{
            background: `${Common.color.b900}`,
            color: ` ${Common.color.p000}`,
            border: "none",
            fontSize: "16px",
            fontWeight: "normal",
          }}
          onClick={() => navigate("/directpay/buy", {
            state: { info: userInfo, productInfo: productInfo },
          })}
        >
          주문하기
        </BigButton>
        <DeleteButton
          onClick={() => {
            handleOpenCartAllDeleteModal();
          }}
        >
          전체 삭제하기
        </DeleteButton>
      </div>
    </div>
    </div>
  );
};

export default ShippingCart;
