"use client";
import React from "react";
import styles from "./login.module.css";
import Image from "next/image";
import SocialLoginButton from "../components/socialloginbutton/SocialLoginButton";
import Link from "next/link";

const page = () => {
  const testbutton = () => {
    console.log("gd");
  };
  return (
    <div className={styles.background}>
      <div className={styles.content}>
        <Link href={"/"}>
          <Image
            alt="로고 이미지"
            src={"/branding/logo/facttory.svg"}
            width={97}
            height={84}
          ></Image>
          <span className={styles.lgo}>Fact-tory</span>
        </Link>
        o
        <span className={styles.text}>
          간편하게 로그인하고, 더욱 편하게 분석결과를 만나보세요
        </span>
        <div className={styles.buttons}>
          <SocialLoginButton
            types="google"
            onClick={testbutton}
          ></SocialLoginButton>
          <SocialLoginButton
            types="kakao"
            onClick={testbutton}
          ></SocialLoginButton>
        </div>
      </div>
    </div>
  );
};

export default page;
