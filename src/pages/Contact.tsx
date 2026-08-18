import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import aboutHero from "@/assets/contact.jpg";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="overflow-hidden">
        {/* ---------------------- HERO SECTION ---------------------- */}
        <section className="relative flex items-center h-[70vh] md:h-[90vh] overflow-hidden">
          <img
            src={aboutHero}
            alt="Contact hero"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/40 to-transparent" />

          <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 text-right max-w-[90%] md:max-w-3xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#fff4f4] font-cinematic animate-dynamic-hero">
              Contact <span className="text-white">Us</span>
            </h1>
          </div>
        </section>

        {/* ---------------------- CONTACT SECTION ---------------------- */}
        <section className="min-h-screen bg-black text-white py-14 px-4">
          <div className="container mx-auto max-w-6xl">
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                Get in <span className="text-red-600">Touch</span>
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                Have a question or want to work with us? Fill out the form and we'll get back to you shortly.
              </p>
            </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6 flex items-start gap-4">
                <Phone className="text-red-600 mt-1" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-400">+91 98765 43210</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6 flex items-start gap-4">
                <Mail className="text-red-600 mt-1" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-400">info@example.com</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6 flex items-start gap-4">
                <MapPin className="text-red-600 mt-1" />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-gray-400">
                    3rd Floor, Business Plaza,<br />
                    Mumbai, India
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-zinc-900 border-zinc-800">
            <CardContent className="p-6">
              <form className="space-y-4">
                <Input
                  placeholder="Your Name"
                  className="bg-black border-zinc-700 text-white"
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="bg-black border-zinc-700 text-white"
                />
                <Input
                  placeholder="Subject"
                  className="bg-black border-zinc-700 text-white"
                />
                <Textarea
                  placeholder="Your Message"
                  rows={5}
                  className="bg-black border-zinc-700 text-white"
                />

                <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}