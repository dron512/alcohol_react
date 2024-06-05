import React, { useState } from "react";
import { Common } from "../../styles/CommonCss";
import { BigButton, DeleteButton } from "../../styles/common/reviewProductCss";
import { useNavigate } from "react-router";

const CartOrderDelButton = ({handleOpenCartAllDeleteModal,productInfo,info}) => {
  const navigate = useNavigate();
  console.log(productInfo)
  console.log(info) 
  return (
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
            marginRight:"2rem"
          }}
          onClick={() => navigate("/directpay/buy",{state: {info:info[0],productInfo:productInfo}})}
        >
          주문하기
        </BigButton>
        <BigButton style={{
            background: `${Common.color.b900}`,
            color: ` ${Common.color.p000}`,
            border: "none",
            fontSize: "16px",
            fontWeight: "normal",
          }}
          onClick={() => {
            handleOpenCartAllDeleteModal();
          }}
        >
          전체 삭제하기
        </BigButton>
      </div>
    </div>
  );
};

export default CartOrderDelButton;
