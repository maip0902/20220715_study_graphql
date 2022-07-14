function device(parent, args, context) {
    return context.prisma.device.findMany()
}

function payment(parent, args, context) {
    return context.prisma.payment.findMany()
}

function paymentItem(parent, args, context) {
    return context.prisma.paymentItem.findMany()
}

module.exports = {
    device,
    payment,
    paymentItem
}
