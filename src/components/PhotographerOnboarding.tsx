"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, Camera, Check } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Checkbox } from './ui/checkbox';

const steps = [
  { id: 'welcome', title: 'Welcome' },
  { id: 'personal', title: 'Personal Details' },
  { id: 'professional', title: 'Professional Info' },
  { id: 'services', title: 'Services & Specialization' },
  { id: 'portfolio', title: 'Portfolio & Pricing' },
  { id: 'success', title: 'Thank You' },
];

const photographyTypes = [
  { id: 'wedding', label: 'Wedding' },
  { id: 'traditional', label: 'Traditional' },
  { id: 'events', label: 'Events' },
  { id: 'cinematic', label: 'Cinematic' },
  { id: 'other', label: 'Other' },
];

const additionalServices = [
  { id: 'albumDesign', label: 'Album Designing' },
  { id: 'droneStreaming', label: 'Drone Streaming' },
  { id: 'videoMixing', label: 'Video Mixing' },
  { id: 'other', label: 'Other' },
];

const hardwareServices = [
  { id: 'drone', label: 'Drone' },
  { id: 'livestreaming', label: 'Livestreaming + LED Walls' },
  { id: 'other', label: 'Other' },
];

export function PhotographerOnboarding() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    location: '',
    cameraManufacturer: '',
    cameraModel: '',
    lenses: '',
    type: '',
    experience: '',
    language: '',
    photoTypes: [] as string[],
    additionalServices: [] as string[],
    hardwareServices: [] as string[],
    portfolioLink: '',
    startingPrice: '',
  });

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleCheckboxChange = (field: 'photoTypes' | 'additionalServices' | 'hardwareServices', value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    nextStep();
  };

  const progress = ((currentStep + 1) / steps.length) * 100;

  const isPersonalDetailsValid = formData.fullName && formData.phone && formData.email && formData.location;
  const isProfessionalInfoValid = formData.cameraManufacturer && formData.cameraModel && formData.lenses && formData.type && formData.experience && formData.language;
  const isServicesValid = formData.photoTypes.length > 0;
  const isPortfolioValid = formData.portfolioLink && formData.startingPrice;

  return (
    <div className="min-h-screen bg-[#0A0A0F] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full blur-3xl animate-pulse-glow" />
      </div>

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-white/10 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-gray-600 to-gray-800"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Step Counter */}
      <div className="fixed top-6 right-6 text-gray-400 z-40">
        {currentStep + 1} / {steps.length}
      </div>

      {/* Main Content */}
      <div className="max-w-2xl w-full relative z-10">
        <AnimatePresence mode="wait">
          {/* Welcome Screen */}
          {currentStep === 0 && (
            <motion.div
              key="welcome"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <Camera className="w-16 h-16 text-white mx-auto mb-6" />
              <h1 className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">SnapEvent – Photographer Onboarding</h1>
              <p className="text-xl text-gray-300 mb-8">
                SnapEvent is a new platform to help photographers get more visibility, clients, and bookings.
              </p>
              <Button
                onClick={nextStep}
                className="bg-gradient-to-r from-gray-600 to-gray-800 hover:opacity-90 px-8 py-6 rounded-2xl"
              >
                Get Started
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          )}

          {/* Personal Details */}
          {currentStep === 1 && (
            <motion.div
              key="personal"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-white mb-6">Personal Details</h2>
              
              <div className="space-y-4 mb-6">
                <div>
                  <Label className="text-gray-400 mb-2 block">Full Name</Label>
                  <Input
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Enter your full name"
                    className="w-full bg-white/5 border border-white/10 text-white placeholder:text-gray-500 py-6 rounded-2xl"
                    autoFocus
                  />
                </div>

                <div>
                  <Label className="text-gray-400 mb-2 block">Phone Number (WhatsApp preferred)</Label>
                  <Input
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Enter your phone number"
                    className="w-full bg-white/5 border border-white/10 text-white placeholder:text-gray-500 py-6 rounded-2xl"
                  />
                </div>

                <div>
                  <Label className="text-gray-400 mb-2 block">Email Address</Label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Enter your email address"
                    className="w-full bg-white/5 border border-white/10 text-white placeholder:text-gray-500 py-6 rounded-2xl"
                  />
                </div>

                <div>
                  <Label className="text-gray-400 mb-2 block">Location (Village/Town, District, State)</Label>
                  <Input
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g., Mumbai, Maharashtra"
                    className="w-full bg-white/5 border border-white/10 text-white placeholder:text-gray-500 py-6 rounded-2xl"
                  />
                </div>
              </div>

              <Button
                onClick={nextStep}
                disabled={!isPersonalDetailsValid}
                className="bg-gradient-to-r from-[#6B5BFF] to-[#FF7EB3] hover:opacity-90 disabled:opacity-50 px-8 py-6 rounded-2xl"
              >
                Continue
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          )}

          {/* Professional Info */}
          {currentStep === 2 && (
            <motion.div
              key="professional"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-white mb-6">Professional Information</h2>
              
              <div className="space-y-4 mb-6">
                <div>
                  <Label className="text-gray-400 mb-2 block">Camera Manufacturer</Label>
                  <Select value={formData.cameraManufacturer} onValueChange={(value) => setFormData({ ...formData, cameraManufacturer: value })}>
                    <SelectTrigger className="w-full bg-white/5 border border-white/10 text-white py-6 rounded-2xl">
                      <SelectValue placeholder="Select a manufacturer" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1a1a24] border-white/10 text-white">
                      <SelectItem value="canon" className="text-white focus:bg-white/10 focus:text-white">Canon</SelectItem>
                      <SelectItem value="nikon" className="text-white focus:bg-white/10 focus:text-white">Nikon</SelectItem>
                      <SelectItem value="sony" className="text-white focus:bg-white/10 focus:text-white">Sony</SelectItem>
                      <SelectItem value="fujifilm" className="text-white focus:bg-white/10 focus:text-white">Fujifilm</SelectItem>
                      <SelectItem value="panasonic" className="text-white focus:bg-white/10 focus:text-white">Panasonic</SelectItem>
                      <SelectItem value="other" className="text-white focus:bg-white/10 focus:text-white">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-gray-400 mb-2 block">Camera Model</Label>
                  <Input
                    value={formData.cameraModel}
                    onChange={(e) => setFormData({ ...formData, cameraModel: e.target.value })}
                    placeholder="e.g., Canon EOS R5"
                    className="w-full bg-white/5 border border-white/10 text-white placeholder:text-gray-500 py-6 rounded-2xl"
                  />
                </div>

                <div>
                  <Label className="text-gray-400 mb-2 block">Lenses</Label>
                  <p className="text-gray-500 mb-2">e.g., Canon 24-70mm f/2.8, Sigma 85mm f/1.4 etc</p>
                  <Textarea
                    value={formData.lenses}
                    onChange={(e) => setFormData({ ...formData, lenses: e.target.value })}
                    placeholder="List your lenses"
                    className="w-full bg-white/5 border border-white/10 text-white placeholder:text-gray-500 rounded-2xl min-h-24"
                  />
                </div>

                <div>
                  <Label className="text-gray-400 mb-2 block">Type: Photographer / Videographer</Label>
                  <Select value={formData.type} onValueChange={(value) => setFormData({ ...formData, type: value })}>
                    <SelectTrigger className="w-full bg-white/5 border border-white/10 text-white py-6 rounded-2xl">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1a1a24] border-white/10 text-white">
                      <SelectItem value="photographer" className="text-white focus:bg-white/10 focus:text-white">Photographer</SelectItem>
                      <SelectItem value="videographer" className="text-white focus:bg-white/10 focus:text-white">Videographer</SelectItem>
                      <SelectItem value="both" className="text-white focus:bg-white/10 focus:text-white">Both</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-gray-400 mb-2 block">Experience</Label>
                  <Select value={formData.experience} onValueChange={(value) => setFormData({ ...formData, experience: value })}>
                    <SelectTrigger className="w-full bg-white/5 border border-white/10 text-white py-6 rounded-2xl">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1a1a24] border-white/10 text-white">
                      <SelectItem value="beginner" className="text-white focus:bg-white/10 focus:text-white">Beginner (0-2 years)</SelectItem>
                      <SelectItem value="intermediate" className="text-white focus:bg-white/10 focus:text-white">Intermediate (2-5 years)</SelectItem>
                      <SelectItem value="experienced" className="text-white focus:bg-white/10 focus:text-white">Experienced (5-10 years)</SelectItem>
                      <SelectItem value="expert" className="text-white focus:bg-white/10 focus:text-white">Expert (10+ years)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-gray-400 mb-2 block">Preferred Language for Communication</Label>
                  <Select value={formData.language} onValueChange={(value) => setFormData({ ...formData, language: value })}>
                    <SelectTrigger className="w-full bg-white/5 border border-white/10 text-white py-6 rounded-2xl">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1a1a24] border-white/10 text-white">
                      <SelectItem value="english" className="text-white focus:bg-white/10 focus:text-white">English</SelectItem>
                      <SelectItem value="hindi" className="text-white focus:bg-white/10 focus:text-white">Hindi</SelectItem>
                      <SelectItem value="marathi" className="text-white focus:bg-white/10 focus:text-white">Marathi</SelectItem>
                      <SelectItem value="tamil" className="text-white focus:bg-white/10 focus:text-white">Tamil</SelectItem>
                      <SelectItem value="telugu" className="text-white focus:bg-white/10 focus:text-white">Telugu</SelectItem>
                      <SelectItem value="kannada" className="text-white focus:bg-white/10 focus:text-white">Kannada</SelectItem>
                      <SelectItem value="bengali" className="text-white focus:bg-white/10 focus:text-white">Bengali</SelectItem>
                      <SelectItem value="gujarati" className="text-white focus:bg-white/10 focus:text-white">Gujarati</SelectItem>
                      <SelectItem value="other" className="text-white focus:bg-white/10 focus:text-white">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button
                onClick={nextStep}
                disabled={!isProfessionalInfoValid}
                className="bg-gradient-to-r from-[#6B5BFF] to-[#FF7EB3] hover:opacity-90 disabled:opacity-50 px-8 py-6 rounded-2xl"
              >
                Continue
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          )}

          {/* Services & Specialization */}
          {currentStep === 3 && (
            <motion.div
              key="services"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-white mb-6">Services & Specialization</h2>
              
              <div className="space-y-6 mb-6">
                <div>
                  <Label className="text-gray-400 mb-3 block">Types of Photography You Do</Label>
                  <p className="text-gray-500 mb-3">Please select up to 3 options.</p>
                  <div className="space-y-3">
                    {photographyTypes.map((type) => (
                      <div key={type.id} className="flex items-center space-x-3">
                        <Checkbox
                          id={type.id}
                          checked={formData.photoTypes.includes(type.id)}
                          onCheckedChange={() => handleCheckboxChange('photoTypes', type.id)}
                          className="border-white/20 data-[state=checked]:bg-white data-[state=checked]:border-white"
                        />
                        <Label htmlFor={type.id} className="text-white cursor-pointer">
                          {type.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label className="text-gray-400 mb-3 block">Additional Services</Label>
                  <p className="text-gray-500 mb-3">Please select up to 2 options.</p>
                  <div className="space-y-3">
                    {additionalServices.map((service) => (
                      <div key={service.id} className="flex items-center space-x-3">
                        <Checkbox
                          id={service.id}
                          checked={formData.additionalServices.includes(service.id)}
                          onCheckedChange={() => handleCheckboxChange('additionalServices', service.id)}
                          className="border-white/20 data-[state=checked]:bg-white data-[state=checked]:border-white"
                        />
                        <Label htmlFor={service.id} className="text-white cursor-pointer">
                          {service.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label className="text-gray-400 mb-3 block">Hardware Services</Label>
                  <div className="space-y-3">
                    {hardwareServices.map((service) => (
                      <div key={service.id} className="flex items-center space-x-3">
                        <Checkbox
                          id={service.id}
                          checked={formData.hardwareServices.includes(service.id)}
                          onCheckedChange={() => handleCheckboxChange('hardwareServices', service.id)}
                          className="border-white/20 data-[state=checked]:bg-white data-[state=checked]:border-white"
                        />
                        <Label htmlFor={service.id} className="text-white cursor-pointer">
                          {service.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <Button
                onClick={nextStep}
                disabled={!isServicesValid}
                className="bg-gradient-to-r from-[#6B5BFF] to-[#FF7EB3] hover:opacity-90 disabled:opacity-50 px-8 py-6 rounded-2xl"
              >
                Continue
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          )}

          {/* Portfolio & Pricing */}
          {currentStep === 4 && (
            <motion.div
              key="portfolio"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-white mb-6">Portfolio & Pricing</h2>
              
              <div className="space-y-4 mb-6">
                <div>
                  <Label className="text-gray-400 mb-2 block">Upload 3-5 Sample Albums (Google Drive link)</Label>
                  <p className="text-gray-500 mb-2">Please share your Google Drive link here</p>
                  <Input
                    value={formData.portfolioLink}
                    onChange={(e) => setFormData({ ...formData, portfolioLink: e.target.value })}
                    placeholder="Paste your Google Drive link"
                    className="w-full bg-white/5 border border-white/10 text-white placeholder:text-gray-500 py-6 rounded-2xl"
                    autoFocus
                  />
                </div>

                <div>
                  <Label className="text-gray-400 mb-2 block">Starting Price (Min. ₹10,000 Per Day - Photos + Videos)</Label>
                  <Input
                    type="number"
                    value={formData.startingPrice}
                    onChange={(e) => setFormData({ ...formData, startingPrice: e.target.value })}
                    placeholder="₹20,000"
                    className="w-full bg-white/5 border border-white/10 text-white placeholder:text-gray-500 py-6 rounded-2xl"
                  />
                </div>
              </div>

              <Button
                onClick={handleSubmit}
                disabled={!isPortfolioValid}
                className="bg-gradient-to-r from-[#6B5BFF] to-[#FF7EB3] hover:opacity-90 disabled:opacity-50 px-8 py-6 rounded-2xl"
              >
                Submit Form
              </Button>
            </motion.div>
          )}

          {/* Success Screen */}
          {currentStep === 5 && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-white mb-4">Thank you! 🎉</h2>
              <p className="text-gray-300 mb-4">
                Our team will review your details and create your <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">SnapEvent</span> profile soon.
              </p>
              <p className="text-gray-300 mb-2">
                Stay tuned – we'll share your portfolio link on WhatsApp.
              </p>
              <p className="text-gray-400">
                Follow us on Instagram:{' '}
                <a href="#" className="text-white hover:underline">
                  @snapevent.in
                </a>
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation Buttons */}
        {currentStep > 0 && currentStep < 5 && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={prevStep}
            className="mt-6 text-gray-400 hover:text-white transition-colors flex items-center gap-2"
          >
            <ChevronLeft className="w-5 h-5" />
            Back
          </motion.button>
        )}
      </div>
    </div>
  );
}
