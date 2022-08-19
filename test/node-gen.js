const { toTs, toMd, toMock } = require('@tooltik/aries')

const genNodeTest = async () => {
    await toTs({
        url: './test/swagger.json',
        output: './test/output.node.swagger.types.ts',
        autoRequired: true,
    })
    
    await toMd({
        url: './test/swagger.json',
        output: './test/output.node.swagger.docs.md',
        autoMock: true,
        formatMock: (data) => {
            return {
                code: 0,
                msg: 'success',
                data,
            }
        },
    })
    
    await toMock({
        url: './test/swagger.json',
        output: './test/output.node.swagger.mock.json',
        autoMock: true,
        formatMock: (data) => {
            return {
                code: 0,
                msg: 'success',
                data,
            }
        },
    })
}

genNodeTest()

