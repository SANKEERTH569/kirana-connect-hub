
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface PhoneAuthProps {
  onSuccess?: () => void;
}

const PhoneAuth: React.FC<PhoneAuthProps> = ({ onSuccess }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState<'phone' | 'otp'>('phone');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!phoneNumber || phoneNumber.length < 10) {
      toast({
        title: "Invalid phone number",
        description: "Please enter a valid phone number",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate OTP sending
    setTimeout(() => {
      setIsLoading(false);
      setStep('otp');
      toast({
        title: "OTP Sent",
        description: "A verification code has been sent to your phone",
      });
    }, 1500);
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!otp || otp.length < 4) {
      toast({
        title: "Invalid OTP",
        description: "Please enter the verification code",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate OTP verification
    setTimeout(() => {
      setIsLoading(false);
      
      if (otp === '1234') { // Demo verification
        toast({
          title: "Authentication Successful",
          description: "You have been logged in successfully",
        });
        if (onSuccess) onSuccess();
      } else {
        toast({
          title: "Invalid OTP",
          description: "The verification code you entered is incorrect",
          variant: "destructive",
        });
      }
    }, 1500);
  };

  return (
    <div className="neo-morphism p-6 max-w-md w-full mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-xl font-semibold mb-2">Welcome to My Kirana</h2>
        <p className="text-muted-foreground text-sm">
          {step === 'phone' 
            ? "Please enter your phone number to continue" 
            : "Enter the verification code sent to your phone"}
        </p>
      </div>

      {step === 'phone' ? (
        <form onSubmit={handleSendOtp} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="bg-white"
              required
            />
          </div>
          <Button 
            type="submit" 
            className="w-full mt-4 bg-gradient-to-r from-primary to-kirana-purple hover:opacity-90 transition-opacity"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending OTP...
              </>
            ) : (
              "Send Verification Code"
            )}
          </Button>
        </form>
      ) : (
        <form onSubmit={handleVerifyOtp} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="otp">Verification Code</Label>
            <Input
              id="otp"
              type="text"
              placeholder="Enter 4-digit OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              maxLength={4}
              className="bg-white text-center text-lg tracking-widest"
              required
            />
            <p className="text-xs text-muted-foreground mt-2">
              Didn't receive the code?{" "}
              <button 
                type="button"
                className="text-primary underline" 
                onClick={() => {
                  setStep('phone');
                  setOtp('');
                }}
              >
                Try again
              </button>
            </p>
          </div>
          <Button 
            type="submit" 
            className="w-full mt-4 bg-gradient-to-r from-primary to-kirana-purple hover:opacity-90 transition-opacity"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Verifying...
              </>
            ) : (
              "Verify & Login"
            )}
          </Button>
        </form>
      )}
    </div>
  );
};

export default PhoneAuth;
