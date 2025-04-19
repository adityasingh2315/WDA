"use client";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "./ui/animated-modal";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Phone, Send } from "lucide-react";

export function ContactModal() {
  return (
    <Modal>
      <ModalTrigger className="p-3 bg-blue-500 rounded-md hover:text-blue-500 text-white hover:bg-white border-2 border-blue-500 transition-all ease-in-out duration-300">
        Contact Us
      </ModalTrigger>
      <ModalBody>
        <ModalContent>
          <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
            Get in Touch with{" "}
            <span className="px-1 py-0.5 rounded-md bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
              MoodMap
            </span>
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-neutral-900 rounded-lg"
            >
              <Phone className="w-5 h-5 text-blue-600" />
              <span className="text-sm text-gray-600 dark:text-gray-300">+1 (123) 456-7890</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-neutral-900 rounded-lg"
            >
              <Mail className="w-5 h-5 text-blue-600" />
              <span className="text-sm text-gray-600 dark:text-gray-300">support@moodmap.com</span>
            </motion.div>
          </div>

          <form className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-neutral-800 dark:text-white"
                placeholder="Your name"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-neutral-800 dark:text-white"
                placeholder="Your email"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-neutral-800 dark:text-white"
                placeholder="Your message"
              ></textarea>
            </motion.div>
          </form>
        </ModalContent>
        <ModalFooter className="gap-4">
          <button 
            onClick={() => (document.querySelector('.modal-close-btn') as HTMLButtonElement)?.click()}
            className="px-4 py-2 bg-gray-100 text-gray-700 dark:bg-neutral-800 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-neutral-700 transition-colors"
          >
            Cancel
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
            <MessageSquare className="w-4 h-4" />
            <span>Send Message</span>
          </button>
        </ModalFooter>
      </ModalBody>
    </Modal>
  );
} 