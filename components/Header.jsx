import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'
import Logo from "../lib/logo.png"
import Link from 'next/link'
import { Button } from './ui/button'
import { ChevronDown, FileText, GraduationCap, LayoutDashboard, PenIcon, StarIcon } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'

const Header = () => {
  return (
    <header className='fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 
    supports-[backdrop-filer]:bg-background/60'>
        
        <nav className='container mx-auto px-4 h-16 flex items-center justify-between'>
            <Link href={"/"}>
                <Image src={Logo} alt='logo not found' width={200} height={100}
                className='h-20 py-1 w-auto object-contain'/>
            </Link>

            <div className='flex items-center space-x-2 md:space-x-4 '>
                <SignedIn>
                    <Link href={"/dashboard"}>
                        <Button>
                            <LayoutDashboard className='h-4 w-4'/>
                            <span className='hidden md:block'>Industry Insights</span>
                        </Button>
                    </Link>
                

                <DropdownMenu>
                <DropdownMenuTrigger>
                        <Button>
                            <StarIcon className='h-4 w-4'/>
                            <span className='hidden md:block'>Growth Tools</span>
                            <ChevronDown/>
                        </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
            
                    <DropdownMenuItem>
                        <Link href={"/resume"} className='flex items-center gap-2'>
                            <FileText/>
                            <span>Build Resume</span>
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link href={"/ai-cover-letter"} className='flex items-center gap-2'>
                            <PenIcon/>
                            <span>Cover Letter</span>
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link href={"/interview"} className='flex items-center gap-2'>
                            <GraduationCap/>
                            <span>Mock Interview</span>
                        </Link></DropdownMenuItem>
                    
                </DropdownMenuContent>
                </DropdownMenu>
                </SignedIn>


                <SignedOut>
                <SignInButton><Button>Sign In</Button></SignInButton>
                <SignUpButton><Button>Sign Up</Button></SignUpButton>
                </SignedOut>
                
                <SignedIn>
                <UserButton/>
                </SignedIn>

            </div>
        </nav>
        
        
        
        
        
    
      
    </header>
  )
}

export default Header
