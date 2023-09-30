import axios from "axios";
import { useEffect } from "react";
import useRazorpay from "react-razorpay";
import { Razorpay } from 'react-razorpay';


const Payment = (props)=>{

    const Razorpay = useRazorpay();

    useEffect(()=>{
        console.log('amount', props.amount)
        razorPay()
    },[])
  
    // complete order
    const complete_order = (paymentID, orderID, signature)=>{
        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/order/complete/',
            data: {
                "payment_id": paymentID,
                "order_id": orderID,
                "signature": signature,
                "amount": props.amount
            }
        })
        .then((response)=>{
            console.log(response.data);
        })
        .catch((error)=>{
            console.log(error.response.data);
        })
    }

    const razorPay = ()=>{
        //create order
        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/order/create/',
            data: {
                amount: props.amount,
                currency: "INR"
            }
        })
        .then((response)=>{
            
            // get order id
            var order_id = response.data.data.id
            
            // handle payment
            const options = {
                key: 'rzp_test_vYFJN5tvYzxkX0', // Enter the Key ID generated from the Dashboard
                name: "Acme Corp",
                description: "Test Transaction",
                image: "https://example.com/your_logo",
                order_id: order_id, //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
                
                handler: function (response) {

                    //complete order
                    complete_order(
                        response.razorpay_payment_id,
                        response.razorpay_order_id,
                        response.razorpay_signature
                    )
                },
                prefill: {
                name: "Piyush Garg",
                email: "youremail@example.com",
                contact: "9999999999",
                },
                notes: {
                address: "Razorpay Corporate Office",
                },
                theme: {
                color: "#3399cc",
                },
            };
            const rzp1 = new window.Razorpay(options);
            rzp1.on("payment.failed", function (response) {
                alert(response.error.code);
                alert(response.error.description);
                alert(response.error.source);
                alert(response.error.step);
                alert(response.error.reason);
                alert(response.error.metadata.order_id);
                alert(response.error.metadata.payment_id);
            });
            rzp1.open();
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    return(
        <div>
            Redirecting to payment page...
        </div>
    )
}

export default Payment