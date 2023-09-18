import React, { useCallback } from "react";
import useRazorpay from "react-razorpay";
import { Button } from "reactstrap";

function DemoChat(props) {
  // console.log(props.payment);
  // console.log(props.status);
  const Razorpay = useRazorpay();

  const handlePayment = useCallback(() => {
    // const order = await createOrder(params);

    // const options: RazorpayOptions = {
    const options = {
      key: "rzp_test_8Q9MGMi8hVqdfZ",
      amount: "100",
      currency: "INR",
      name: "hello Corp",
      description: "Test Transaction",
      image: "http://example.com/your_logo",
      order_id: "",
      // order_id: order.id,
      handler: (res) => {
        console.log(res);
        props.callback(true);
        // alert(res.razorpay_payment_id);
        // alert(res.razorpay_order_id);
        // alert(res.razorpay_signature);
      },
      prefill: {
        name: "Sadik",
        email: "mailto:youremail@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzpay = new Razorpay(options);

    rzpay.on("payment.failed", function (response) {
      props.callback(false);
      // alert(response.error.code);
      // alert(response.error.description);
      // alert(response.error.source);
      // alert(response.error.step);
      // alert(response.error.reason);
      // alert(response.error.metadata.order_id);
      // alert(response.error.metadata.payment_id);
    });
    rzpay.open();
  }, [Razorpay]);

  return (
    <div className="App">
      <Button color="success" onClick={handlePayment}>
        Payment
      </Button>
    </div>
  );
}
export default DemoChat;

// import React, { useCallback } from 'react'
// import useRazorpay from 'react-razorpay'

// function DemoChat() {
//   const Razorpay = useRazorpay()

//   const handlePayment = useCallback(() => {
//     const options = {
//       // key: 'rzp_test_8Q9MGMi8hVqdfZ,WaykuCx4m51bhiFu4FPpjG2D',
//       key: 'rzp_test_8Q9MGMi8hVqdfZ',
//       amount: '100',
//       currency: 'INR',
//       name: 'hello Corp',
//       description: 'Test Transaction',
//       image: 'https://example.com/your_logo',
//       order_id: '',
//       handler: (res) => {
//         console.log(res)
//       },
//       prefill: {
//         name: 'Anjali',
//         email: 'mailto:youremail@example.com',
//         contact: '9999999999',
//       },
//       notes: {
//         address: 'Razorpay Corporate Office',
//       },
//       theme: {
//         color: '#3399cc',
//       },
//     }

//     const rzpay = new Razorpay(options)
//     rzpay.open()
//   }, [Razorpay])

//   return (
//     <div className="App">
//       <button onClick={handlePayment}>Click</button>
//     </div>
//   )
// }
// export default DemoChat
