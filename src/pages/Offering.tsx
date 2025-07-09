import React, { useEffect, useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Gift } from 'lucide-react';
import { SidebarProvider } from '@/components/ui/sidebar';
import AdminSidebar from '../components/dashboard/AdminSidebar';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Offering = () => {
  const [sidebarWidth, setSidebarWidth] = useState('250px');

  // Listen for sidebar width changes
  useEffect(() => {
    const handleSidebarWidthChange = () => {
      const width = document.documentElement.style.getPropertyValue('--sidebar-width') || '250px';
      setSidebarWidth(width);
    };

    // Set up a MutationObserver to watch for style changes
    const observer = new MutationObserver(handleSidebarWidthChange);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['style']
    });

    return () => observer.disconnect();
  }, []);

  const handleAddSpecialOffer = () => {
    console.log('Add Special Day Offer clicked');
  };

  const handleCreateCoupon = () => {
    console.log('Create Coupon Code clicked');
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50"
        style={{ '--sidebar-width': sidebarWidth } as React.CSSProperties}>
        <AdminSidebar onWidthChange={setSidebarWidth} />
        <main className="flex-1 p-6 overflow-auto">
          <div className="mx-auto">
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <Gift className="h-8 w-8 text-blue-600" />
                <h1 className="text-3xl font-bold text-gray-900">Offering</h1>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Manage Offering</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 mb-6">
                    Set special day offers, apply coupon codes, and manage availability.
                  </p>

                  <div className="flex gap-4">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button onClick={handleAddSpecialOffer}>
                          Add Special Day Offer
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-lg">
                        <DialogHeader>
                          <DialogTitle>Add Special Day Offer</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="offerTitle">Offer Title</Label>
                            <Input id="offerTitle" placeholder="e.g., Valentine's Day Special" />
                          </div>
                          <div>
                            <Label htmlFor="offerDate">Special Date</Label>
                            <Input id="offerDate" type="date" />
                          </div>
                          <div>
                            <Label htmlFor="discountType">Discount Type</Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Select discount type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="percentage">Percentage Off</SelectItem>
                                <SelectItem value="fixed">Fixed Amount Off</SelectItem>
                                <SelectItem value="bogo">Buy One Get One</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label htmlFor="discountValue">Discount Value</Label>
                            <Input id="discountValue" placeholder="e.g., 20 or 50" />
                          </div>
                          <div>
                            <Label htmlFor="offerDescription">Description</Label>
                            <Textarea id="offerDescription" placeholder="Describe the special offer..." rows={3} />
                          </div>
                        </div>
                        <div className="flex justify-end space-x-2 mt-4">
                          <Button variant="outline">Cancel</Button>
                          <Button>Create Offer</Button>
                        </div>
                      </DialogContent>
                    </Dialog>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="secondary" onClick={handleCreateCoupon}>
                          Create Coupon Code
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-lg">
                        <DialogHeader>
                          <DialogTitle>Create Coupon Code</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="couponCode">Coupon Code</Label>
                            <Input id="couponCode" placeholder="e.g., SAVE20, WELCOME10" />
                          </div>
                          <div>
                            <Label htmlFor="couponType">Coupon Type</Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Select coupon type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="percentage">Percentage Discount</SelectItem>
                                <SelectItem value="fixed">Fixed Amount Discount</SelectItem>
                                <SelectItem value="free-shipping">Free Shipping</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label htmlFor="couponValue">Discount Value</Label>
                            <Input id="couponValue" placeholder="e.g., 15 or 25" />
                          </div>
                          <div>
                            <Label htmlFor="minOrder">Minimum Order Amount</Label>
                            <Input id="minOrder" placeholder="e.g., 100 (optional)" />
                          </div>
                          <div>
                            <Label htmlFor="expiryDate">Expiry Date</Label>
                            <Input id="expiryDate" type="date" />
                          </div>
                          <div>
                            <Label htmlFor="usageLimit">Usage Limit</Label>
                            <Input id="usageLimit" placeholder="e.g., 100 (leave empty for unlimited)" />
                          </div>
                        </div>
                        <div className="flex justify-end space-x-2 mt-4">
                          <Button variant="outline">Cancel</Button>
                          <Button>Create Coupon</Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div >
    </SidebarProvider >
  );
};

export default Offering;
