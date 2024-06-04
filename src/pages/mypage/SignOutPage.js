import React, { useState } from "react";
import MyPageContent from "../../styles/mypage/MyPage";
import { SERVER_URL } from "../../api/config";
import jwtAxios from "../../util/jwtUtil";
import { buttonPrimaryStyle } from "../../styles/sign/signArea";
import Address from "../../components/singup/Address";
import { Button, Form, Input, Select } from "antd";
import { Common } from "../../styles/CommonCss";
import { Link, useNavigate } from "react-router-dom";
import SignOutModalPage from "./SignOutModalPage";

const doSubmit = () => {
  jwtAxios.put(`${SERVER_URL}/user/update`, {
    "nickname": "dfff",
    "password": "a123456!",
    "phone": "01056215621",
    "address": "주소",
    "address2": "상세주소"
  }).then(data => {
    console.log(data);
  }).catch(e => {
    console.log(e);
  });
}

const MyMainPage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const navigate = useNavigate();

  const doSignoutModal = ()=>{
    setIsModalVisible(true);
  }

  return (
    <div style={{ width: '100%' }}>
      <SignOutModalPage 
          setIsModalVisible={setIsModalVisible} 
          isModalVisible={isModalVisible}
           />
      <Form name="mypage_update">
        <MyPageContent>회원탈퇴</MyPageContent>
        <hr />
        <div style={{ margin: '2rem', width: '100%', textAlign: "center" }}>
          <h2 style={{ padding: '0.7rem', fontSize: '2rem' }}>회원 탈퇴하시면 남은 적립금이 사라집니다 탈퇴하시겠습니까?</h2>
        </div>
        <div style={{display:'flex',justifyContent:"center"}}>
          <Button onClick={doSignoutModal}
            type="primary"
            style={{
              background: `${Common.color.f900}`,
              width: "40%",
              height: "60px",
              fontSize: "20px",
              marginRight: "2rem"
            }}>회원탈퇴</Button>
          <Button onClick={() => {
            navigate('/mypage/info');
          }}
            type="primary"
            style={{
              background: `${Common.color.f900}`,
              width: "40%",
              height: "60px",
              fontSize: "20px",
            }}>취소</Button>
        </div>
      </Form>
      <div style={{ marginTop: "2rem" }}>
        <Link to='/mypage/signout' style={{ fontSize: "2rem" }}>      </Link>
      </div>
    </div>
  );
};

export default MyMainPage;
