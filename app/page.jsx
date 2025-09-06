import Link from "next/link";
import { Button } from "@/components/ui/button"; // make sure this is correct
import { Card, CardContent } from "@/components/ui/card";
import HeroSection from "@/components/ui/hero";
import { featuresData, howItWorksData, statsData, testimonialsData, partnersData } from "@/data/landing";
import Image from "next/image";





export default function Home() {
    return (
        <div className="mt-40">
            <HeroSection />


            <section className="py-20 bg-blue-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {statsData.map((statsData, index) => (
                            <div key={index} className="text-center" >
                                <div className="text-4xl font-bold text-blue-600 mb-2">{statsData.value}</div>
                                <div className="text-gray-600">{statsData.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 ">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Everything thing you need to know about AlumGlobe</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuresData.map((feature, index) => (
                            <Card key={index} className="p-6">

                                <CardContent className="pt-4 space-y-4">
                                    {feature.icon}
                                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                                    <p className="text-gray-600">{feature.description}</p>
                                </CardContent>
                            </Card>

                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-blue-50 ">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {howItWorksData.map((step, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">{step.icon}</div>
                                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                                <p className="text-gray-600">{step.description}</p>
                            </div>


                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 ">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">what our users say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonialsData.map((testimonial, index) => (
                            <Card key={index} className="p-6">

                                <CardContent className="pt-4">
                                    <div className="flex items-center mb-4">
                                        <Image
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            width={40}
                                            height={40}
                                            className="rounded-full mb-4" />

                                        <div className="ml-4">
                                            <div className="font-semibold">{testimonial.name}</div>
                                            <div className="text-sm text-gray-600"> {testimonial.role}</div>
                                        </div>
                                    </div>
                                    <p className=" text-gray-600">"{testimonial.quote}"</p>
                                </CardContent>
                            </Card>

                        ))}
                    </div>
                </div>
            </section>

          <section className="py-20 bg-blue-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-center mb-4 text-white">
          Ready To Build Networks And Grow?
        </h2>
        <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
          Join thousands of users who are managing their networking and
          connections smartly with AlumGlobe
        </p>

        <Link href="/dashboard" passHref>
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-50 animate-bounce"
          >
            Start Free Trial &gt;
          </Button>
        </Link>
      </div>
    </section>


            <section className="py-20 ">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Esteemed Partners</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {partnersData.map((partner, index) => (
                            <Card key={index}>
                                <CardContent className="pt-4">
                                    <div className="flex items-center mb-4">
                                        <Image
                                            src={partner.logo}
                                            alt={partner.name}
                                            width={40}
                                            height={40}
                                            className="rounded-full"
                                        />
                                        <div className="ml-4">
                                            <div className="font-semibold">{partner.name}</div>
                                            <a
                                                href={partner.website}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-sm text-blue-600 hover:underline"
                                            >
                                                {partner.website}
                                            </a>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}

                    </div>
                </div>
            </section>



        </div>
    );
}