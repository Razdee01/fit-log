
import Image from "next/image";
import Link from "next/link";
import React from "react";
import workoutImage from "@/assets/banner.png";

const Banner = () => {
  return (
    <section className="mx-auto w-full container px-4 py-8">
      <div className="flex flex-col rounded-xl border border-gray-800 bg-[#15171c] md:flex-row">

        {/* Left Content */}
        <div className="flex w-full flex-col justify-center p-6 md:w-3/5 md:p-12">
          <p className="mb-4 text-xs font-bold uppercase tracking-wider text-lime-400">
            Workout Library
          </p>

          <h1 className="max-w-xl text-4xl font-black uppercase leading-[0.95] text-white md:text-5xl lg:text-6xl">
            Train with intent.
            <br />
            Log every set.
          </h1>

          <p className="mt-5 max-w-lg text-sm leading-6 text-gray-400 md:text-base">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <div className="mt-6">
            <Link
              href="/Work-out"
              className="inline-flex items-center rounded-md bg-lime-400 px-5 py-3 text-xs font-bold uppercase text-black transition hover:bg-lime-300"
            >
              Browse Workouts
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full p-6 md:w-2/5 md:p-12">
          <Image
            src={workoutImage}
            alt="Workout"
            className="h-auto w-full rounded-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default Banner;

