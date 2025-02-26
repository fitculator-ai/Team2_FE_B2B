"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import Button from "./Button";
import Input from "./Input";

type Inputs = {
  username: string;
  contactNumber: number;
  companyName: string;
  inquiryTitle: string;
  inquiryContent: string;
};

export default function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form
      className="flex w-[522px] flex-col content-center justify-center gap-2 rounded-3xl px-9 py-7 align-middle shadow-xl"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        id="username"
        label="이름"
        type="text"
        placeholder="이름을 입력해 주세요."
        isRequired={true}
        {...register("username", { required: true })}
      />
      <Input
        id="contactNumber"
        label="연락처"
        type="tel"
        placeholder="번호만 입력해 주세요."
        isRequired={true}
        {...register("contactNumber", { required: true })}
      />
      <Input
        id="email"
        label="이메일"
        type="email"
        placeholder="이메일을 입력해 주세요."
        isRequired={true}
        {...register("contactNumber", { required: true })}
      />
      <Input
        id="companyName"
        label="회사명"
        type="text"
        placeholder="회사명을 입력해 주세요."
        isRequired={true}
        {...register("companyName", { required: true })}
      />
      <Input
        id="inquiryTitle"
        label="문의 제목"
        type="text"
        placeholder="문의 제목을 입력해 주세요."
        isRequired={true}
        {...register("inquiryTitle", { required: true })}
      />
      {/* <Input
        id="inquiryContent"
        label="문의 내용"
        type="text"
        placeholder="문의 내용을 입력해 주세요."
        isRequired={true}
        {...register("inquiryContent", { required: true })}
      /> */}
      <label htmlFor="inquiryContent">문의 내용</label>
      <textarea
        name="inquiryContent"
        id="inquiryContent"
        className="resize-none rounded-sm border border-gray-400 p-2 text-sm outline-[#4FD5FF] focus:bg-[#F2F6F8]/68 focus:outline"
      ></textarea>
      <span className="mx-auto text-sm text-red-500">
        필수 항목을 모두 입력해 주세요.
      </span>
      <Button type="submit">문의하기</Button>
    </form>
  );
}
