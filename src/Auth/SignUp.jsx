const SignUp = () => {
  return ( 
    <div className="gap-5 m-40 flex flex-col items-center justify-center">
      <h1 className="text-5xl font-medium">Stay in the loop</h1>
      <div className="flex flex-col items-center justify-center">
        <span>Sign up to get exclusive promos, top artist wears and scoops</span>
        <span>and early access to new product from Morgul</span>
      </div>
      <div className="flex gap-3 mt-12">
        <input placeholder="FirstName" className="border-[1px] border-black w-40 py-2 px-5"/>
        <input type="email" placeholder="Enter your email" className="flex-1 border-[1px] border-black px-6"/>
        <button type="submit"className="border-2 border-black py-5 px-8 bg-black text-white"> Sign me up </button>
      </div>
    </div>
  );
};

export default SignUp;
