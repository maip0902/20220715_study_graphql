function paymentItem(parent, args, context) {
    return context.prisma.payment.findUnique({
        where: {id: parent.id}
    })
    .paymentItem()
}

function device(parent, args, context) {
    return context.prisma.payment.findUnique({
        where: {id: parent.id}
    })
    .device()
}

module.exports = {
    paymentItem,
    device
}