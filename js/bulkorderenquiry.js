// ========================================
// BULK ORDER ENQUIRY LOGIC
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    const bulkOrderForm = document.getElementById('bulkOrderForm');
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    
    // Conditional Logic for Wholesale / Resale
    const eventType = document.getElementById('eventType');
    const eventDetailsRow = document.getElementById('eventDetailsRow');
    const eventDate = document.getElementById('eventDate');
    const eventGuests = document.getElementById('eventGuests');

    if (eventType && eventDetailsRow && eventDate && eventGuests) {
        eventType.addEventListener('change', (e) => {
            if (e.target.value === 'Wholesale / Resale') {
                eventDetailsRow.style.display = 'none';
                eventDate.required = false;
                eventGuests.required = false;
            } else {
                eventDetailsRow.style.display = 'flex';
                eventDate.required = true;
                eventGuests.required = true;
            }
        });
    }

    if (bulkOrderForm) {
        bulkOrderForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Collect form data (for demonstration purposes)
            const formData = new FormData(bulkOrderForm);
            console.log("Bulk Order Enquiry Submitted!");
            
            // Show toast notification
            showToast("Enquiry submitted successfully! We'll contact you shortly.");
            
            // Reset form
            bulkOrderForm.reset();
        });
    }

    function showToast(message) {
        if (!toast || !toastMessage) return;
        
        toastMessage.textContent = message;
        toast.classList.add('show');
        
        // Custom animation using GSAP if available, otherwise fallback
        if (typeof gsap !== 'undefined') {
            gsap.fromTo(toast, 
                { y: 50, opacity: 0 }, 
                { y: 0, opacity: 1, duration: 0.5, ease: "back.out(1.7)" }
            );
            
            setTimeout(() => {
                gsap.to(toast, { y: 50, opacity: 0, duration: 0.3, onComplete: () => {
                    toast.classList.remove('show');
                    toast.style.opacity = '';
                    toast.style.transform = '';
                }});
            }, 4000);
        } else {
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
        }
    }
});
