// // Problem 05 : Monthly Savings of a Freelancer
// // ⚠️ Function Name Must be monthlySavings()

// // ফ্রি ল্যান্সার শাহে দ প্রতি মাসে বে শ কি ছুপে মে ন্ট ক্লায়ে ন্ট দে র থে কে পায় । কি ন্তু পে মে ন্ট এর কি ছুট্যাক্স পরি শ োধ
// // এবং নি জে র লি ভি ং কস্ট এর কারনে সে সে ভি ংস করতে পারে না । তার সে ভি ংস এর হি সে ব করার জন্যে তাকে
// // monthlySavings() নামে একটি ফাংশন তৈ রী করে দি তে যে টা ইনপুট হি সে বে নে বে একটি Array (প্রতি মাসে
// // পাওয়া সকল পে মে ন্ট ) এবং একটি Number ( শাহে দে র লি ভি ং কস্ট ) ।
// // শাহে দে র যে সকল পে মে ন্ট 3000 টাকা বা তার বে শি সে সকল পে মে ন্ট থে কে ব্যাংক Tax হি সে বে ২০% টাকা কে টে
// // নে য় । এখন ম োট ইনকাম থে কে Tax গুল ো বাদ দি য়ে এবং Living cost বাদ দি য়ে বাকী যে টাকা থাকে সে টা ই
// // হল ো শাহে দে র সে ভি ংস । অর্থাৎ ফাংশন টি শাহে দে র সে ভি ংস কে রি টার্ন করবে । যদি সে ভি ংস করার মত ো টাকা না
// // /*function signature/sample */
// // function password(obj) {
// // //write your code here
// // }

// // থাকে অর্থাৎ সে ভি ংস এর ভ্যালুযদি ০ এর চে য়ে কম হয় তাহলে ফাংশন টি রি টার্ন করবে একটি স্ট্রি ং তাহল ো “earn
// // more” ।

// // Input :
// // ফাংশন টি ইনপুট নে বে একটি Array (All payments) এবং একটি number (Living cost) ।
// Output :
// ফাংশন টি একটি number অথবা string রি টার্ন করবে ।
// ● যদি savings 0 বা তার থে কে বে শি হয় তাহলে রি টার্ন করবে number ( Total Savings )
// ● যদি savings 0 থে কে ছ োট হয় তাহলে রি টার্ন করবে String ( “earn more”)

// Challenge 📢 : ফাংশন টি তখন ই “invalid input” string টি রি টার্ন করবে ।
// ● যদি প্রথম প্যারামি টার টি Array না হয়
// ● যদি ও 2য় প্যারামি টার টি নাম্বার না হয়

// solve---------------------

function monthlySavings(arr, livingCost) {
    let totalAmount = 0;
    let sum = 0;
    let daruan = true;
    if (!Array.isArray(arr) || typeof(livingCost) != "number") {
        daruan = false;
    }
    let savings;
    if (daruan) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] >= 3000) {
                totalAmount = arr[i] - arr[i] * 20 / 100;

            } else {
                totalAmount = arr[i];
            }
            sum = sum + totalAmount;
        }
        savings = sum - livingCost;
        return savings;
    }
    if (savings <= 0 && daruan === true) {
        return "earn more";

    } else {
        return "invalid";
    }
}
// console.log(monthlySavings([3000, 2000, 3000], 5400))