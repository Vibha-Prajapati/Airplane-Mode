// Copyright (c) 2024, vibha and contributors
// For license information, please see license.txt


frappe.ui.form.on('AirplaneTicket', {
    refresh: function(frm) {
        frm.fields_dict['total_amount'].currency = 'INR';  
    }
});
