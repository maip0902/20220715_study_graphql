function createDevice(parent, args, context) {
    return context.prisma.device.create({
        data: {
            name: args.name,
            serial: args.serial
        }
    })
}

function createPaymentItem(parent, args, context) {
    return context.prisma.paymentItem.create({
        data: {
            name: args.name,
            price: args.price,
        },
    })
}

function createPayment(parent, args, context) {
    return context.prisma.payment.create({
        data: {
            device: {connect: {id: Number(args.deviceId)}},
            paymentItem: {connect: {id: Number(args.paymentItemId)}}
        },
    })
}

module.exports = {
    createDevice,
    createPaymentItem,
    createPayment
}