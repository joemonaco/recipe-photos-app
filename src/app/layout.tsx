import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurger } from "@fortawesome/free-solid-svg-icons/faBurger";
import { faHeart } from "@fortawesome/free-solid-svg-icons/faHeart";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { AddRecipeAlert } from "@/components/add-recipe-alert";
import { useState } from "react";
import AddNewRecipe from "@/components/add-new-recipe";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

function SideMenu() {
  return (
    <div className='pb-12 w-1/4'>
      <div className='space-y-4 py-4'>
        <div className='px-3 py-2'>
          <h2 className='mb-2 px-4 text-lg font-semibold tracking-tight'>
            Manage
          </h2>
          <div className='space-y-1'>
            <Button variant='ghost' className='w-full justify-start'>
              <Link href='/'>
                <div className='flex flex-row'>
                  <FontAwesomeIcon icon={faBurger} className='mr-2 h-4 w-4' />
                  View Recipes
                </div>
              </Link>
            </Button>
            <Button variant='ghost' className='w-full justify-start'>
              <Link href='/recipes/add'>
                <div className='flex flex-row'>
                  <FontAwesomeIcon icon={faPlus} className='mr-2 h-4 w-4' />
                  Add New Recipe
                </div>
              </Link>
            </Button>
            <Button variant='ghost' className='w-full justify-start'>
              <Link href='/recipes'>
                <div className='flex flex-row'>
                  <FontAwesomeIcon icon={faHeart} className='mr-2 h-4 w-4' />
                  Favorites
                </div>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='border-b'>
          <div className='flex h-16 items-center px-4 container mx-auto'>
            Recipes
          </div>
        </div>
        <div className='flex'>
          <SideMenu />
          <div className='w-full px-4 pt-8'>{children}</div>
        </div>
      </body>
    </html>
  );
}
