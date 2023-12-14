import { Resend } from 'resend';

export async function POST(request: Request) {
    const formData = await request.formData();
    let formJSON:{[key: string]: string} = {};
    for (let [key, value] of formData.entries()){
        formJSON[key] = value;
    }
    
    const resend = new Resend(process.env.API);
    const { data, error } = await resend.emails.send({
        from: "onboarding@resend.dev",
        to: 'contact.deriveit@gmail.com',
        subject: `${formJSON["name"]} - ${formJSON["title"]}`,
        html: `<p>${formJSON["mainText"]}<br/>by ${formJSON["email"]}</p>`
    });
    if (error) Response.json(["There was an error in the submission.","There was an error in the submission."]);
    return Response.json(["Your message is sent.",`The message you sent: ${formJSON["mainText"]}`]);
}