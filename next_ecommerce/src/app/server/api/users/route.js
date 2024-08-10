require("../../lib/database");
import { NextResponse } from 'next/server';
import User from '../../models/user'
export async function POST(request){
    const {name,password} = await request.json();
    const user = new User({name,password})
    await user.save()
    return NextResponse.json({"name":name,"password":password})
}