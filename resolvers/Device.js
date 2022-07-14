function payments(parent, args, context) {
    return context.prisma.device.findUnique({
        where: {id: parent.id}
    })
    .payments()
}

module.exports = {
    payments
}