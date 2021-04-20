import React from 'react'
import { useForm } from "react-hook-form";
import "./contact.scss";

function ContactPage() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <div className="container">
      <form className="lyMaincontact" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">姓</label>
          <input  {...register("firstName", { required: true, maxLength: 20 })} type="text" className="form-control" data-id="exampleFormControlInput1" placeholder="呂"></input>
          {errors.firstName && <span>This field is required</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput2" className="form-label">名</label>
          <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} type="text" className="form-control" data-id="exampleFormControlInput2" placeholder="鳳仙"></input>
          {errors.lastName && <span>This field is required</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput3" className="form-label">年紀</label>
          <input  {...register("age", { min: 18, max: 99 })} type="number" className="form-control" data-id="exampleFormControlInput3" placeholder="0"></input>
          {errors.age && <span>This field is required</span>}
        </div>
        <input type="submit" />
      </form>
    </div>
  )
}

export default ContactPage
