import { NextResponse } from 'next/server';
import { sendResumeEmail } from '@/lib/gmail';

// Function to handle multipart/form-data
async function parseMultipartFormData(request: Request): Promise<{ [key: string]: string | File }> {
  const formData = await request.formData();
  const data: { [key: string]: string | File } = {};
  
  for (const [key, value] of formData.entries()) {
    data[key] = value;
  }
  
  return data;
}

export async function POST(request: Request) {
  try {
    // Parse the multipart form data
    const formData = await parseMultipartFormData(request);
      // Validate required fields
    const { fullName, expertiseArea, email, phone, resume } = formData;
    
    if (!fullName || !expertiseArea || !email || !phone || !resume || !(resume instanceof File)) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate file type
    if (resume.type !== 'application/pdf') {
      return NextResponse.json(
        { error: 'Resume must be a PDF file' },
        { status: 400 }
      );
    }

    try {
      // Send email with resume attachment
      await sendResumeEmail(
        fullName as string,
        email as string,
        phone as string,
        resume
      );
      
      // Return success response
      return NextResponse.json(
        { message: 'Resume submitted successfully' },
        { status: 200 }
      );
    } catch (emailError) {
      console.error('Failed to send email:', emailError);
      return NextResponse.json(
        { error: 'Failed to send resume submission' },
        { status: 500 }
      );
    }
    
  } catch (error) {
    console.error('Error processing resume submission:', error);
    return NextResponse.json(
      { error: 'Failed to process resume submission' },
      { status: 500 }
    );
  }
}
