"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import Icon from "./Icon/Icon";
import Button from "./Button";
import Input from "./Input";

type Inputs = {
  username: string;
  contactNumber: number;
  email: string;
  companyName: string;
  inquiryTitle: string;
  inquiryContent: string;
};

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Inputs>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      await axios.post("/api/slack", data);
      alert("제출이 완료되었습니다.");
    } catch (error) {
      console.error(error);
      alert("메시지 전송 실패");
    }
  };

  return (
    <form
      className="flex w-[460px] flex-col content-center justify-center gap-2 rounded-3xl px-9 py-7 align-middle shadow-xl"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        id="companyName"
        label="회사명"
        name="companyName"
        type="text"
        placeholder="회사명을 입력해 주세요."
        isRequired={true}
        register={register}
      />
      <Input
        id="username"
        name="username"
        label="이름"
        type="text"
        placeholder="이름을 입력해 주세요."
        isRequired={true}
        register={register}
      />
      <Input
        id="contactNumber"
        name="contactNumber"
        label="연락처"
        type="tel"
        placeholder="번호만 입력해 주세요."
        isRequired={true}
        register={register}
      />
      <Input
        id="email"
        label="이메일"
        name="email"
        type="email"
        placeholder="이메일을 입력해 주세요."
        isRequired={true}
        register={register}
      />
      <Input
        id="inquiryTitle"
        name="inquiryTitle"
        label="문의 제목"
        type="text"
        placeholder="문의 제목을 입력해 주세요."
        isRequired={true}
        register={register}
      />
      <div role="group" aria-label="문의 내용 입력 영역" className="flex flex-col">
        <label htmlFor="inquiryContent" className="mb-[1px] inline font-semibold">
          문의 내용
          <Icon
            name="icon-point"
            fontSize={0.7}
            color="#F11E1E"
            style={{ paddingLeft: "2px" }}
          ></Icon>
        </label>
        <textarea
          id="inquiryContent"
          name="inquiryContent"
          className="resize-none rounded-sm border border-gray-400 p-2 text-sm outline-[#1E88E5] focus:bg-[#F5F5F5]/68 focus:outline"
          {...register("inquiryContent", { required: true })}
        ></textarea>
      </div>

      {Object.keys(errors).length !== 0 && (
        <span className="mx-auto text-sm text-red-500">
          필수 항목을 모두 입력해 주세요.
        </span>
      )}
      <Button isActive={!isValid} type="submit">
        문의하기
      </Button>
    </form>
  );
}
