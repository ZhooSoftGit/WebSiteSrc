import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const MobileNavbar = ({ navLinks, location }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleMobileSubmenu = (itemName) => {
    setOpenMobileSubmenu(openMobileSubmenu === itemName ? null : itemName);
  };

  useEffect(() => {
    setIsOpen(false);
    setOpenMobileSubmenu(null);
  }, [location]);

  return (
    <>
      <div className="md:hidden">
        <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label={isOpen ? "Close Menu" : "Open Menu"}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t absolute top-full left-0 right-0 shadow-lg"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    {link.subsections ? (
                      <>
                        <button
                          onClick={() => toggleMobileSubmenu(link.name)}
                          className={cn(
                            "flex items-center justify-between w-full px-3 py-2 rounded-md text-sm font-medium transition-colors text-left",
                            location.pathname.startsWith(link.path) ? "text-primary bg-primary/10" : "text-gray-700 hover:text-primary hover:bg-primary/5"
                          )}
                        >
                          {link.name}
                          <ChevronRight
                            className={cn("h-4 w-4 transition-transform", openMobileSubmenu === link.name && "rotate-90")}
                          />
                        </button>
                        <AnimatePresence>
                          {openMobileSubmenu === link.name && (
                            <motion.ul
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-6 mt-1 space-y-1"
                            >
                              {link.subsections.map((subLink) => (
                                <li key={subLink.name}>
                                  <Link
                                    to={subLink.path}
                                    className={cn(
                                      "block px-3 py-2 rounded-md text-sm font-medium transition-colors",
                                      location.pathname === subLink.path ? "text-primary bg-primary/10" : "text-gray-600 hover:text-primary hover:bg-primary/5"
                                    )}
                                  >
                                    {subLink.name}
                                  </Link>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        to={link.path}
                        className={cn(
                          "block px-3 py-2 rounded-md text-sm font-medium transition-colors",
                          location.pathname === link.path ? "text-primary bg-primary/10" : "text-gray-700 hover:text-primary hover:bg-primary/5"
                        )}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: navLinks.length * 0.05 }}
                >
                   <Button asChild className="w-full mt-4 text-sm">
                     <Link to="/contact">Contact Us</Link>
                   </Button>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNavbar;