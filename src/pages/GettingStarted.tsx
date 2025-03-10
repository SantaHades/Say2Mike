
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, QrCode, Copy, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollAnimation from '@/components/ScrollAnimation';
import { toast } from 'sonner';

const GettingStarted: React.FC = () => {
  const navigate = useNavigate();
  const [chatRoomNumber, setChatRoomNumber] = useState('CH-' + Math.floor(100000 + Math.random() * 900000));

  const regenerateChatRoomNumber = () => {
    const newNumber = 'CH-' + Math.floor(100000 + Math.random() * 900000);
    setChatRoomNumber(newNumber);
    toast.success('New chat room number generated!');
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(chatRoomNumber);
    toast.success('Copied to clipboard!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <div className="container mx-auto px-4 pt-8">
        <Button 
          variant="ghost" 
          className="flex items-center text-blue-600 hover:text-blue-800 mb-8"
          onClick={() => navigate('/')}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>

        <ScrollAnimation animation="fade-up">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Getting Started with Multilingual Chat
          </h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
            Follow these simple steps to start breaking language barriers and communicate
            effortlessly across languages.
          </p>
        </ScrollAnimation>
      </div>

      {/* Steps */}
      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          {/* Step 1 */}
          <ScrollAnimation animation="fade-up" delay={100}>
            <div className="bg-white rounded-2xl shadow-md p-8 mb-8">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-4">
                  1
                </div>
                <h2 className="text-2xl font-semibold">Choose Your Language</h2>
              </div>
              <p className="text-gray-600 mb-6 pl-14">
                Select your native language from the dropdown menu. This will be the language you speak and hear responses in.
              </p>
              <div className="pl-14 bg-blue-50 p-6 rounded-xl">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <span className="text-2xl">👤</span>
                  </div>
                  <div className="ml-4">
                    <div className="text-sm text-gray-500 mb-1">Your language</div>
                    <div className="px-4 py-2 bg-white rounded-full shadow-sm inline-flex items-center">
                      <span className="text-gray-800">English</span>
                      <span className="ml-2 text-blue-600">▼</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Step 2 */}
          <ScrollAnimation animation="fade-up" delay={200}>
            <div className="bg-white rounded-2xl shadow-md p-8 mb-8">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-4">
                  2
                </div>
                <h2 className="text-2xl font-semibold">Select Recipient's Language</h2>
              </div>
              <p className="text-gray-600 mb-6 pl-14">
                Choose the language of the person you want to communicate with. Your messages will be translated to this language.
              </p>
              <div className="pl-14 bg-blue-50 p-6 rounded-xl">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <span className="text-2xl">👥</span>
                  </div>
                  <div className="ml-4">
                    <div className="text-sm text-gray-500 mb-1">Their language</div>
                    <div className="px-4 py-2 bg-white rounded-full shadow-sm inline-flex items-center">
                      <span className="text-gray-800">Japanese</span>
                      <span className="ml-2 text-blue-600">▼</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Step 3 */}
          <ScrollAnimation animation="fade-up" delay={300}>
            <div className="bg-white rounded-2xl shadow-md p-8">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-4">
                  3
                </div>
                <h2 className="text-2xl font-semibold">Invite Someone to Chat</h2>
              </div>
              <p className="text-gray-600 mb-6 pl-14">
                Invite others to join your multilingual chat session using either the QR code or by sharing your unique chat room number.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 pl-14">
                {/* QR Code */}
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="font-medium text-blue-800 mb-3 flex items-center">
                    <QrCode className="w-5 h-5 mr-2" />
                    Scan QR Code
                  </h3>
                  <div className="bg-white p-4 rounded-lg flex items-center justify-center mb-4">
                    <div className="w-48 h-48 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                      <QrCode className="w-32 h-32" />
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Have your conversation partner scan this QR code to join your chat room instantly.
                  </p>
                </div>
                
                {/* Chat Room Number */}
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="font-medium text-blue-800 mb-3">Chat Room Number</h3>
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-2">
                      Share this unique code with your conversation partner:
                    </p>
                    <div className="flex items-center">
                      <div className="bg-white px-4 py-3 rounded-lg text-xl font-mono font-semibold text-blue-800 flex-grow">
                        {chatRoomNumber}
                      </div>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="ml-2 text-gray-500 hover:text-blue-600"
                        onClick={copyToClipboard}
                      >
                        <Copy className="w-5 h-5" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="ml-1 text-gray-500 hover:text-blue-600"
                        onClick={regenerateChatRoomNumber}
                      >
                        <RefreshCw className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    They can enter this code on the chat page to join your conversation.
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
          
          {/* Start Button */}
          <div className="text-center mt-12">
            <ScrollAnimation animation="fade-up" delay={400}>
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-full text-lg font-medium"
                onClick={() => navigate('/')}
              >
                Start Chatting Now
              </Button>
              <p className="text-gray-500 mt-4">
                Ready to break language barriers and communicate effortlessly!
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GettingStarted;
