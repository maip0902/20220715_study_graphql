function payments(parent, args, context) {
    return context.prisma.paymentItem.findUnique({
        where: {id: parent.id}
    })
    .payments()
}

module.exports = {
    payments
}