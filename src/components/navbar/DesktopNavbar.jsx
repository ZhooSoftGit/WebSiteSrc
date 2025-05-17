import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

const ListItem = React.forwardRef(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={href}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const DesktopNavbar = ({ navLinks, location }) => {
  return (
    <>
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList>
          {navLinks.map((link) =>
            link.subsections ? (
              <NavigationMenuItem key={link.name}>
                <NavigationMenuTrigger 
                  className={cn(
                    navigationMenuTriggerStyle(), 
                    "text-sm",
                    location.pathname.startsWith(link.path) ? "text-primary bg-primary/10" : "text-gray-700 hover:text-primary hover:bg-primary/5"
                  )}
                >
                  {link.name}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {link.subsections.map((subsection) => (
                      <ListItem key={subsection.name} title={subsection.name} href={subsection.path}>
                        {subsection.description || `Learn more about ${subsection.name.toLowerCase()}.`}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ) : (
              <NavigationMenuItem key={link.name}>
                <Link to={link.path} legacyBehavior passHref>
                  <NavigationMenuLink 
                    className={cn(
                      navigationMenuTriggerStyle(), 
                      "text-sm",
                      location.pathname === link.path ? "text-primary bg-primary/10" : "text-gray-700 hover:text-primary hover:bg-primary/5"
                    )}
                  >
                    {link.name}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            )
          )}
        </NavigationMenuList>
      </NavigationMenu>
      <motion.div
        className="hidden md:block"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        <Button asChild className="ml-4 text-sm">
          <Link to="/contact">Contact Us</Link>
        </Button>
      </motion.div>
    </>
  );
};

export default DesktopNavbar;