const SignUp = () => {
  return ( 
    <div className="col-span-12
    
    gap-2 my-20 md:m-30 flex flex-col items-center justify-center">
      <h1 className="font-bold text-3xl md:text-5xl ">Stay in the loop</h1>
      <div className="px-6 text-center flex flex-col items-center justify-center">
        <span>Sign up to get exclusive promos and </span>
        <span>early access to new product</span>
      </div>

      <div className="flex gap-3 mt-6 flex-col  lg:flex-row">
        <input placeholder="FirstName" className="border-[1px] border-black py-6 px-5"/>
        <input type="email" placeholder="Enter your email" className="flex-1 border-[1px] border-black py-6 px-4"/>
        <button type="submit"className="mt-2 border-2 border-black py-5 px-8 bg-black text-white md:mt-0"> Sign me up </button>
      </div>
    </div>
  );
};

export default SignUp;
