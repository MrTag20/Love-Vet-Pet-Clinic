import { NextResponse } from 'next/server';
import { z } from 'zod';

const appointmentSchema = z.object({
  ownerName: z.string().min(2, 'Owner name must be at least 2 characters'),
  phone: z.string().min(7, 'Please provide a valid contact number'),
  email: z.string().email('Please provide a valid email address'),
  petName: z.string().min(1, 'Pet name is required'),
  petType: z.enum(['Dog', 'Cat', 'Bird', 'Other']),
  serviceType: z.enum(['Grooming', 'Vaccination', 'Consultation', 'Surgery', 'Certification', 'Other']),
  preferredDate: z.string().min(1, 'Please select your preferred appointment date'),
  preferredTime: z.string().min(1, 'Please select a preferred time slot'),
  notes: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = appointmentSchema.parse(body);

    // Simulate database record creation / confirmation email dispatch
    console.log('[API] New Love Vet Appointment Booked:', validatedData);

    return NextResponse.json(
      {
        success: true,
        message: `Appointment successfully confirmed for ${validatedData.petName}!`,
        appointmentId: `LV-${Math.floor(100000 + Math.random() * 900000)}`,
        data: validatedData,
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation failed',
          errors: error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : 'Internal server error processing appointment.',
      },
      { status: 500 }
    );
  }
}
