function enter_quantitat_objecte () {
    quantitat_obj = game.askForNumber("Introdueix la quantitat que vulguis", 3)
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    player2,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . . f e 4 d d d d 4 e f e . . 
        . . f e f 2 2 2 2 e d d 4 e . . 
        . . e 4 f 2 2 2 2 e d d e . . . 
        . . . . f 4 4 5 5 f e e . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f e e 2 2 2 2 2 2 e f f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . e f e 4 d d d d 4 e f . . . 
        . . e 4 d d e 2 2 2 2 f e f . . 
        . . . e d d e 2 2 2 2 f 4 e . . 
        . . . . e e f 5 5 4 4 f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . f f f . . . . 
        `],
    300,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    player2,
    [img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e e e d d d f . . . 
        . . . . . f 4 d d e 4 e f . . . 
        . . . . . f e d d e 2 2 f . . . 
        . . . . f f f e e f 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `,img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . 4 d d e 4 4 4 e f . . . 
        . . . . e d d e 2 2 2 2 f . . . 
        . . . . f e e f 4 4 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `],
    300,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    player2,
    [img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d e e e e e f . . . 
        . . . f e 4 e d d 4 f . . . . . 
        . . . f 2 2 e d d e f . . . . . 
        . . f f 5 5 f e e f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `,img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e d d 4 . . . . 
        . . . f 2 2 2 2 e d d e . . . . 
        . . f f 5 5 4 4 f e e f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `],
    300,
    true
    )
})
function show_player () {
    scene.setBackgroundImage(img`
        999ccccc66776666666676c6777777fc6f99999999999999999999999999999999999999999999999999999999999999999999999dd999999999999999999999999999999dddddddddd1d9999999999
        99ecc76c777777e66666667677777c7776c999999999999999999999999999999999999999999999999999999999999999999999dddddd999999999999999999999999999dddd1dddddd99999999999
        c9cc6766776676c66676666666c666667e76c9999999999999999999999999999999999999999999999999999999999999999999dddd1dd99999999999999999999999999dddd1dddddd99999999999
        cc6667767777677ecc666666666766666666f999999999999999999999999999999999999999999999999999999999999999999ddddddd1dd999999999999999999999999ddd1ddddd1999999999999
        cc6766677777777766cc666cc666c666c676c999999999999999999999999999999999999999999999999999999999999999999ddddddddd1dd999999999999999999999dddddddd11d999999999999
        ccc687c76777776c6cccc66c66666c66c66c999999999999999999999999999999999999999999999999999999999999999999ddddddddddd11dd9999999999999999999dddd1dddddd999999999999
        6c66677677777776e7c766c66c6cccccc66c6c9999999999999999999999999999999999999999999999999999999999999999d11ddd1dddddd1ddd99999999999999999dddd1ddddd9999999999999
        e6ccc66677e76cc7cc6666cccccc6cccccccccc99999999999999999999999999999999999999999999999999999999999999dddd11dddddddd1dd1dd999999999999999d1d1dddddd9999999999999
        c6ccc7c677c6776cc666ccc6cccc6cc6cc66cc99999999999999999999999999999999999999999999999999999999999999ddddddddddddddddddd1ddd999999999999bddddddd1d99999999999999
        ccc66cc776c677777f7ecccccc66cccccccccc99999999999999999999999999999999999999999999999999999999999999dddddd1dd11dddddddddd1ddd9999999999dddddddd1d99999999999999
        c66ccc6ccc66ccccc6cccccccccccccc6cccccc999999999999999999999999999999999999999999999999999999999999dddddd1dddddddddddddddddddd999999999ddddddddd999999999999999
        e66ccc6ccc6cccccc6ccc6ccccccccccccccccc9999999999999999999999999999999999999999999999999999999999999ddddddddddddddddddddd1dd11dd999999dddd1ddd1d999999999999999
        cbcccccccc7e66cc6cccccccccccccccccccccf9999999999999999999999999999999999999999999999999999999999999999ddddddddd1dd11ddd1ddddddddd9999bdd1dddddd999999999999999
        ccccccccccccccccccccccccccccfccccccccc99ecc99999969999999999999999999999999999999999999999999999999999999ddddddddddddd1dddddd1dd1ddd99bbddddd1d9999999999999999
        cccccccfcccccccccccccccccccccfccccc6ccccccccc696f6c699999999999999999999999999999999999999999999999999999999ddddddddddd1dddddddddd1db999bbbdddd9999999999999999
        cccccccccccccccccc7ecccccccccccccccccccccccc6c6c676769999999999999999999999999999999999999999999999999999999999ddddddddddddddddddddbd99999ebbd99999999999999999
        cccccccccccccccfccccccccccccccccccccccccccccfc6c677ec999999999999999999999999999999999999999999999999999999999999ddddd1ddddddddddddb999bcee99999999999999999999
        ccccccccccccccccccccccccfcfcccccccccccccccccf666767776c6991111199999999999999999999999999999999999999999999999999999bdddddddddd1ddb999eceeee9999999999999999999
        ccccccccccccccccccfccccc66ccccc66866cccccccc667667777776611111119911999999999999999999999999999999999999999999999999999bddddddddddeb9ec22eefcb99999999999999999
        cccccccccbcccccccccccc6c66c6c6cc7677cccccccccc6667777c77cb111111111111999999999999999999999999999999999999999999999999999dbddddddbccce22eee2efbddd9999999999999
        ccccccccc99ccfcccc9dcc76666cccc67e76cc8ccccccc666666666766c11111111111199999999999999999999999999999999999999999999999999999ddddb9ccecceee2222bd111ddd999999999
        ccfccfccccccc6cccccfc767666c666767777676cccccc66cc6666cc66c11111111111119999999999999999999999999999999999999999999999999999999dbefee2eeef2222dddd1d11dddd99999
        786ccccccccccccccccc67c66666676677777676ccc6ccc6666c6c6c6cd111111111111199999999999999999999999999999999999999999999999999999999efeee22eefcc22dddd1ddd11ddddd99
        c7e7777ecfccccccc76c7777766666666cc77776cc7cc76cc6cc6ccccc6c1111111111111999999999999999999999999999999999999999999999999999999efee2222ee2ecccdddd1dddd1dd111dd
        6c7766ccccfcccccc7667776767666666666666766cc66cccccc6cccc6cc1111111111111111199999999999999999999999999999999999999999999999999ce222222ee222eeddddddddd1ddddd1d
        687776767cccccc66c67777777c6c66c666c668c66cffffffcc6fccccccf111111111111111111999999999999999999999999999999999999999999999999bee222222e222222d111ddddd1ddddd1d
        767cc66ccccccccc66c767777c6ccc666c66cc6c6cffffffffcccccfcccc111111111111111111111199999999999999999999999999999999999999999999ee222222ee222222ddd1dd1dddddddd1d
        667eccccccccc6c66676777776cc766c6c6ccccc6ccccfffffcccccccccc111111111111111111111119999999999999999999999999999999999999999999ce2222b2ce222222ddd1ddd111ddddd1d
        c6ccfccffccccc6cccc6777777c66cccccc66cccc6ccccffffccfccccccc11111111111111111111111999999999999999999999999999999999999999999ee222241dde222222ddd1ddddd1d1ddd1d
        ccccccff9ccccccc6cc77cc777767ccccc6cccccccccccffffcccccccbcccffb1111111111111111111999999999999999999999999999999999999999999ce22ffddddde222ffffddddddd1dd11ddd
        ffffccfffccccccc6c6cc66ccccccccccccccccccccccccfffffccccccccccccb11111111111111111199999999999999999999999999999999999999999ee222ffddd1dde22fffffeddddd1dddd11d
        fffffffffccccccccccccccccccccc6ccccccccccccccccffffffcfcccccccccc1111111111111111199999999999999999999999999999999999999999dc2222fb1ddddd222fffffeeeddd1ddddd1d
        ffcfffffffccccc8ccccccc7cc6cccccccccccccccccfffffffffcccccccccccb1111111111111111999999999999999999999999999999999999999991ee2222fddddddd222fffff22eeed1dddd11d
        ffffffffffcccccbcccccccccccccfccccccccccccfffffffcfccffccccccccfcf11111111119111999999999999999999999999999999999999999999bc22222c1dd1ddb224fffff2222eebdddd1dd
        ffffcfccccb9deeecccccccccccc7ffcccccccccccfffffffcccccccccccfcc1cd99911111199999999999999999999999999999999999999999999111ee22222dd1d1dde222ccccf2222ee9cddd1dd
        ffffccc6ccccbcceccccccccccccccffccccccccccfffffffccccccccffff9999999999119999999999999999999999999999999999999999999991111ce222221ddd1dd2222222222222229999dddd
        ffffccc66cccc6cf666c8ccfffcccccccccccccccccffcf9fcccccccfffffc9999999999999999999999999999999999999999999999999999999111111e2222bddd1ddd22222222222222e999999dd
        9fffc66666c6f6cc6767ccccccccffcfffccfc8cf9bccef9ccccccccfffffffffffc9999999999999999999999999999999999999999999999991111111e2222dddddddb22222222222222e99999999
        99dcc766c6cccc6c77776ccccccc7eeccfffffc7ef99dcfbc9cccccccffffffffffff999999999999999999999999999999999999999999999991111111eeeeb1ddddddeeeeeeeeeeeeeeec99999999
        99cc7676666c6666767777676cc67c66ccccffcccff9dcffb9ccccccccfffffffffff999999999999999999999999999999999999999999999911111111ceeed1dd1ddd22f242f22f2f2efb99999999
        cc76766766666766677777776cccccccc76cfcfcccc6defc999fcf9cfcffff9fffffb99999999999999999999999ddddd99999999999911111111111111cf2edddd1ddd2ffe2eeeee2cfefb11999999
        cc67c76766666667677c77777cccccc6c76cbffcfffbdefc9999999999fffffcffffffc9999999999999999999dd11dd1ddb99999999111111111111111ceebddddd1def2f2fec222fe2efd11999999
        76c77676c766666666c66666767cccc7777cccfff9b99efc99999999999cfffffffffff9999999999999999ddd11eeeecb11ddd99999111111111111111cefddddddddef2f2f2fe22feeff111199999
        77777767ecc66666666666666666ccc7c67cffffeed99eec999bff99999999ffffff6c999999999999999dd11dccd1d11bee11ddb999111111111111111cfedddddddde4ef24ffefe2ecec111119999
        6c77e7777e6cc666cc66c666c666ccccc6666cc99dee9eec99bffff99999999fffff99999999999999ddd11eee11cffffc1deeb11ddd911111111111111feb1dddddde22efe22f22f2f2efd11119999
        77767777fccccc6666666cc6c66cccccccc67cccc9debeccfffffff99999999cffc9999999999999dd11dfcd1de22222222ed1bee11ddb111111111111dcfdddd1dddffeeeeeeeeeeeeeeed11111119
        76777777767c766c66ccccccc6c6ccccccccccccc99deeccfccffccfdcc999999999999999999ddd11ecb11eefbbbbbbbbbbfcb11ecd11ddd1111111111ebdd1ddddd222222222222222ee111111111
        7677777767c66ccccccc66cccc6cccccccccc6ff99994eccfccc7efffffb999999999999999dd111fc11beeee2bbbbbbbbbbeeeeed1dce111db11111111eddddd1ddbe22222222222222e2111111111
        c677cc777c7ccccc6cc6cccccc6ccccccccc99999999decccccccc66c6fb999999999999ddd11beb1dceeeeeeebbbbbbbbbbeeeeeeec11bcd11dd111111edddd1ddde222222222222222e2111111111
        ccc6c66cccccccccccc6cccccccccccc999999999999decccccccc6c7c99999999999999b11fe11beeeeeeeee2bbbbbbbbbbeeeeeeeeeef11cbd1b99991bdddddddd2222242222222222e2111111111
        c6cc6c7cccc6ccccccccccccccccccccc99999999999decccccccc7777cc999999999999d1e1deeeeeeeeeeee2bbbbbbbbbbeeeeeeeeeeeeed1e1d99999ddddddddd222222222eeee222e2111111111
        cccc7cf6cc6ccc6ccccccccccccfccccc7c999999999decb9ecbcc6c67cf99999999999b1b1ffffeeeeeeeeeffbbbb11bbbbeffffffffffffffb11d99991ddd1dddc22222222effff222e2111111111
        cccccccccccccccccccccfcccccf7c6c7eec99999999deecc9ecccccc67ecc999999999d1c1eeeeeeeeeeeeeeeb9991111bbeeeeeeeeeeeeeee1b1d999dd1ddddddf22222222effff22222d11111119
        ccccccccccccc99ccccccccccccfc67777cccf999999dcccb9cccccccccccc99999999d1ddceeefffffffffffe1111111111effffffffffffffbb119991dd1dddddf22222222efffce2222d99911199
        fcccccccccccc999ccccccccccc77767676cc7999999dccc9999cccccc999999999999d1c1eeeeeeeeeeee2222bbbbbbbbbb2222eeeeeeeeeeee1b1b9d1dddddddbf22222222effffc2222b99999999
        9ecccccccccccc99cccccccccc66776ccccb6c9df999dccc999968999999999999111d11bbffffffffffeeeeeeeeeeeeeeeeeeeeeeffffffffff1c119ddddd1dddff22222222efffff2222b99999999
        96c8cc999ecccc9e9bccccccccc677677ccccccfcc99decc96fc67ec9999999999111b1c1eeeeeeee2222222222222222222222222222eeeeeeefdd1bdddddddddff22222222efffff2222b99999999
        9999999999cc969c9dccccccccfc77cccccccccc9999decb9cc67cc7ec9999999991111edeeeee222222222222222222222222222222222eeeeee1c1ddddd1ddddfc222222222e22222222c99999999
        999999996ccc99999deccccccccccc68cc6cffcc9999deccccc7c6777cc999999999b1e1fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffed11dddd1ddde22222222222222222222e99999999
        99999999cc6999999deeccccccccccccccfc69999999dec8c687776c68c79999999911e1eee2222222222222222222222222222222222222222eee1e1dddddddd222222222222222222222e99999999
        99999999999999999deecccccccccccccccc99999999deccccc67677cc6ccc99999d1bdffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffcb11bddddddee2222222222222222222e99999999
        99999999999999999deecc9fffccccccccc699999999deccc7ef77cccccccb9999911c1eee22222222222222222222222222222222222222222eeee1b1d2ddddbe22222222222222222222299999999
        99999999999999999deeccfff9999cccc6b999999999deccc8cccccccccfc99999d1dbcfffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffdc11e2edd2e22222222222222222222299999999
        99999999999999999deeccccc9999999999999999999decccfccccc6cc99999999d1c1eee111111111e22222221111111111e222222d11111111beee1b1b222e2222222222222222222222299999999
        99999999999999999deeccccb9999999999999999999decbbfcccccccc9999999911bbeee1feb1ecdbe22222221eccddcbe12222222dbccb1ecd1eee1c1122222222222222222222222222299999999
        99999999999999999deecccc99999999999999999999decbfc999fc6999999999d1e1eeee1cec1ebfde2e222221cefddbfc12222222dbecc1eef1eeecdd1b2222222222222222222222222299999999
        99999999999999999deecccc66ffc999999999999999decccb99999999999999911e1eeeb1fff1fffde22222221fffddfcf12222222dbfff1fff1eeee1e112222222222222222222222222299999999
        99999999999999999deecccc666ffc99999999999999deccc999999999999999d1bdffffb11dd1dd11eeeeeeee1ddd11d111eeeeeeed1ddd1dd11efffcbd1e222222222222222222222222e99999999
        99999999999999999deecccc6666ff999999999999994eccc99999999999999911c12ee241fff1cbcbe22222221cffddcef12222222dbfff1ccf1e2eee1e1d222222222222222222222222ed9999999
        99999999999999999deeeccc6666ffff9999999999994eccc99999999999999d1ddcfffeb1ffc1cfcdeeeeeeee1cffddcfc1eeeeeeedbfff1cfc1eefffbb112222222222222222222222222b9999999
        99999999999999999beeccc666666ffff69999999999deecb9999999999999911c1eee224111111111e222222211111111112222222d111111111e2eeee1e1b222222222222222222222222e9999999
        999999999999999967eeccc66666ffffff6999996666deccb999999999999991dbbeee22eeeeeeeeeee2222222eeeeeeeeee2222222eeeeeeeeeee22eee1e11222222222222222222222222e9999999
        999999999999999667eeccc66666fffffff999966666deccb9999999999999d1e1eee2222222222222222222222222222222222222222222222222222eeebb1b22222222222222222222222e9999999
        999999999999996667eeccc666666f6fffff69666666deccb999999999999911e1e22222222222222222222222222222222222222222222222222222222ebc1122222222222222222222222e9999999
        999999999999966667eeccc66666666ffffff6666666deccc699999999999d1ee1eee2222222222222222222222222222222222222222222222222222eeebcd1e2222222222222222222222e9999999
        999999999999666666eeccc666666666ffffff666666deccc666699999996d1cc1e22222222222222222222222222222222222222222222222222222222bbee1d2222222222222222222222e9999999
        999999999996666666eeccc666666666fffffff66666decfc66666666666666661efeeeeeeebddddddddddddddddddddddddddddddddddddddeeeeeeeefbb22222222222222222222222222ed999999
        999999999966666666eeccc666666666fffffff66666decfc66666666666666661e22222222b111111111111111111d1111111111111111111b22222222eb22222222222222222222222222eb999999
        999999999666666666eeccc6666666666ffffff66666decfc66666666666666661e22222222b111111111111111111d1111111111111111111b22222222bb22222222222222222222222222ee666666
        99999999666666666ceecccc666666666fffffff6666defcc66666666666666661e22222222b111222222222222b11d111e222222222222111b22222222eb22222222222222222222222222ee666666
        99999966666666666ceefccc666666666ffffffff666befcb66666666666666661e22222222b11112222222222d111d1111e222222222e1111b22222222bb2222222222222222222222e22e2e66f66f
        99999666666666666ceecccc666666666fffffffff66deccb66666666666666661e22222222b11d1122222222d1111d11111e2222222e11d11e22222222bb2222222222222222222222e22e2efff6ff
        99996666666666666ceccccc6666666666ffffffffffdefcb66666666666666661e22222222b11ed11222222d11211d111e11e22222e11eb11b22222222bb2222222222222222222222222e2effffff
        99966666666666666feccccc666666666fffffffffffdcfcc666666666f6666661eeeeeeeeeb11e2d112222d112211d1112e11b222e11e2b11eeeeeeeeeeb2222222222222222222222222e2effffff
        6666666666666666ffeecccc66666c66ffffffffffff4efcc666666666f66ffff1e22222222b11e22b11e211122211111122e11b2e11e22b11b22222222eb2222222222222222222222222e2effffff
        6666666666666666feeecccc66fffffffffffffffffceffcc66666666ffffffff1eeeeeeeeed11e222b111112222111111222e11b11e222b11beeeeeeeebb222222222222222222222222222eefffff
        666666666f66666ffbeeccccfffffffffffffffffffcfeccc66666666ffffffff1e22222222d11e2222e11d2222211111122222111e2222b11b22222222bb222222222222222222222222222e2fffff
        6666666fff6666fffdeeecccfffffffffffffffffffeeeefcc6666666ffffffff1eee222222d11e22221111e22221111112222e111d2222b11b22222222bb222222222222222222222222222e2fffff
        fffffffff6fffffffdeeecccfffffffffffffffffffde4eccc666666fffffffff1eeeeeeeeed11e22e111b11e222111111222b11e11d222b11eeeeeeeeeeb22222222222222222222222222e2efffff
        ffffffffffff77777deeeccc77777777777efffffff4e4cfcceee666fffecffff1e222222eed11e22111e2b11ee211111122b11e2e11122b11b22222222bb222222222222222222222e2e22eeecffff
        ffffff777777777774e4cccc77777777777777777744e4eccfcefffffffceffff1eeeeeeeeed11ee111e2eeb11e2111111eb11ee22e1112b11eeeeeeeeebb222222222222222222222e2222eeee4444
        7777777777777777eee4cccf777777777777717777d4ee4ccecbeeeeeeecbefff1eeeeeeeeed11e111eeeeeee11e111111d11feeeeee111b11beeeeeeeebb22222222224222222222222e2e2eee4444
        77777777777777774fedcccfc777777777777777eedeeebeeeeeccccccfeefcff1eeeeeeeeed1111deeeeeeeee1111111111ceeeeeeee11111eeeeeeeeebbeeee2222245554eeeeeeeeeeeeeeee4444
        7777777777777777deedccccc77777777777777ecedeceeccfcece77777ce77771eeeeeeeeed1111eeeeeeeeeee11111111eeeeeeeeeee1111beeeeeeeeebeffeeeef544455554e222ee2eeefee444e
        77777777777d777e4fe4ccccc7777777eeeeeeedceeeccccffcecccc777cc77771eeeeeeeeed11d222222222e2ee111111eeeeeeeeeee2e111eeeeeeeeebb2ee222255444455555e22ee22eeeeee444
        7777777777777774eefeccccfc77777777eeedcececcceeeffcecffcccccc77771eeeeeeeeed11111111111111111111111111111111111111eeeeeeeeeeb2ee2224544444455555454e2eeeeeee444
        777777777777777ddeefbcccfc777ee7777eeecfceeeeeeeeece7777777ce77771eeeeeeeeed11111111111111111111111111111111111111beeeeeeeebb2ee222544444444555554554222ecee444
        77777777777777444ededcfcffc77cc7eeecfe77ce77777777ce7777777ce777d11111111111111111111111111111111111111111111111111111111111b4444444444444445555544554444444444
        77777777777777ddeededccccfc77feeccc77777ce77777777cee777777cee77777777777777fee2e444444444444444444444444444444444444444444444444454444444444555554555444444444
        77777777777eedddeeeedcfffcceececc7777777ce7777777cebceeeeeceecc777777fceeeeeeeeeeeeeee4444444444444444444444444444444444445ddd544454444444445445555e55544444444
        77effffffffed4deedeeccfceecccceeff777777ce77d77cecccffcce77ccfffcceeeeee444444444444444444444444444444444444444444444445555554445544444444444444455445555555555
        7ffffffffedd4d4eeecceeeeccfffceefffffe7ecc77eeef77cc7777777cceee444444444444444444444444444444444444444444444444444455555554e4555554444e4444e444455555555555555
        77efffeed44ed4eefececcccffcfcceffffffff7cbceef7777cccccfceec4444444444444444444444444444444444444444444444444444444455555444555555554444445eee55555555555555555
        77777777eee4eeeeeececcfffcfffcefffee777eeece77777eeeee444444444444444444444444444444444444444444444444444444444444444444444555555444444444455555555555555555555
        77777777fccceeeccccccccfc7777ce77777eeecce7777eeeefee4444444444444444444444444444444444444444444444444444444444444444444444444454444ee4445555555555555555555444
        77777777feeeecce77ee7e7777777ee777eeece7cc777ccfee444444444444444444444444444444444444444444444444444444444444444444444444444444444eeee455555555555555555544444
        7777eeeefeccc77777ee777777777eeeeecc77eee77effee4444444444444444444444444444444444444444444444444444444444444444444444444e444444444eeeee54444444555554544444444
        eeeeecccce77777777ee777777777ebecc777777eefeee444444444444444444444444444444444444444444444444444444444444444444444444444e444444444eeee454444444444544444444444
        ecccc777fe77777777ee777777eeeee7777777eeeee444444444444444444444444444444444444444444444444444444444444444444444444444444e44444444eeeee454444444444544444444444
        fe777777ee77777777ee7777eecccce77eeeeeee444444444444444444444444444444444444444444444444444444444444444444444444444444444e44444444eeee4454444444444544444444444
        77777777ee77717777ee7eeecce77ecceee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444e44444444eeeee444444444444544444444444
        7777d177ee77777777eeeccc77777eef6ee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444ee4444444eeeee454444444444544444444eee
        77777777ee777777eecece77777eeeee4444444444444444444444444444444444444444444444444444444d4444444444444444444444444444444444444e44e44e4444544444444444444444eeeee
        77777777ee777eeeeeee777eeeeee4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444454444444444544eeeeeeeee
        77777777ee7eeeccc77ee777efee444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444544444444445eeeeeeeeeee
        77777777eeeeec7777eeeefeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444445444444444454eeeeeeeeee
        77777eeececf777e77eeeeeeeeeeeeeeeeeee444444444444444444444444444444444444444444444444444444444444444444444444444444444444444ee4444444444555444444445eeeeeeeeeee
        7eeeeeccce7777777777777eee6feeeeeeeeeeeeee4444444444444e4444444444444444444444444444444444444444444444444444444444444444eeeeeee444eeeeee444445554444eee4eeeeeee
        eeeccc77ee777777777777777777777777777eeeeeeeeeeee444444444444444444444444444444444444444444444444444444444444444444444eeeeeeeeeeeeeeeeeeeeeeeee44444eeeeeeeeeee
        cce77777ee7777777777777777777777777777777777777776eeeeeeeeeee444444444444444444444444444444444444444444444444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        `)
    show_options()
    player2 = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    player2.setPosition(80, 120)
    player2.setStayInScreen(true)
    controller.moveSprite(player2)
}
function pi_a_cavall () {
    result = Math.round(quantitat_obj * 12)
    game.showLongText(result, DialogLayout.Center)
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    player2,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e 3 . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f 2 2 f f f f . . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f f 2 f e f . . 
        . . f f f 2 f e e 2 2 f f f . . 
        . . f e 2 f f e e 2 f e e f . . 
        . f f e f f e e e f e e e f f . 
        . f f e e e e e e e e e e f f . 
        . . . f e e e e e e e e f . . . 
        . . . e f f f f f f f f 4 e . . 
        . . . 4 f 2 2 2 2 2 e d d 4 . . 
        . . . e f f f f f f e e 4 . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f 2 2 f f f f . . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e f 2 f f f 2 f 2 e f . . 
        . . f f f 2 2 e e f 2 f f f . . 
        . . f e e f 2 e e f f 2 e f . . 
        . f f e e e f e e e f f e f f . 
        . f f e e e e e e e e e e f f . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f e . . . 
        . . 4 d d e 2 2 2 2 2 f 4 . . . 
        . . . 4 e e f f f f f f e . . . 
        . . . . . . . . . f f f . . . . 
        `],
    300,
    true
    )
})
function pi_a_gallina () {
    result = Math.round(quantitat_obj * 6)
    game.showLongText(result, DialogLayout.Center)
}
function show_options () {
    option1 = sprites.create(img`
        ddddddddddddddddddddddddddddd
        ddddddddddddddddddddddcdddddd
        dddddddddddddddddddddcbdddddd
        ddddddddd44ddddddddbccddddddd
        dddddddde44bddddddddcddbddddd
        ddddddddd4eedddddddbcfffcbddd
        ddddddddd4eedddddddffffbddddd
        dddddddddbeeeddddddcfffbddddd
        dddddddddbeeebdddddffcfcbdddd
        bddddddddbeee4dddbcffffcdcddd
        dddddddddceeeebdbccfffccdbbdd
        dddddddddfeeffebdddccccbddddd
        dddddddddfecffffcfdcccccddddd
        dddbdbdddfefffcfffccfcccddddd
        dddddddddfffcffcceebfccbddddd
        dddddddddcfccbcceeebcfcdddddd
        dddddddddbffcbdeeeeccbbdddddd
        ddddddddddfffce4ecffcdddddddd
        ddddddddddcfffbebecfddddddddd
        dddddddddddfffccceccddddddddd
        ddd1dddddddefcccfccdddddddddd
        ddddddddddddbcfffcddddddddddd
        dddddddddddddccfddddddddddddd
        dddddddddddddddfddddddddddddd
        dddddddddddddddbddddddddddddd
        bdddbddddddddddbddddddddddddd
        bbccdcceddddddddddddddddddddd
        dddbccccccbbbbddddddddddddddd
        bbddddddddbdddddddddddddddddd
        bddddddbddddddddddddddddddddd
        `, SpriteKind.Food)
    option1.setPosition(22, 23)
    option1.setStayInScreen(true)
    option2 = sprites.create(img`
        bbbbbbdddddddddbbbdddddddddddd1111
        bbbbdddddddddbebbbbbdddddddddd1111
        dbdddddbbdddbeddddddeddddddddd1111
        bdddbbbcccddeddddddddbdddddddd1d11
        dddbeebcccdbdddddddddbddddddbb11d1
        dddbbeccccdbddddddddd1bddddbcbddbb
        dbbebbececbdddddddddbdbddddbcbddbb
        bbbeddeebfbdddddddddd1ddddddbbbbdb
        bbccbdccbbbdbbdbbbdbddbbbddbbbbbdb
        ccccbbccbbdbcbddbbbbdbbdbbbbbdcccb
        bbbbeeeebbdbeebdeee4dbbdbeccbbbbbb
        bbbbbbbeebdeeebdeee4dbbddeeeeecbbd
        bbbbbbbeebbeeebbeee4b44bdeeeeeeccc
        bbbbbbbdbeeebbbbebdb4ebbdbbbeeeeec
        bbbbebbddbeebddebbddeebdbe4bbeeeec
        ebbbeebddbeebddebbddeebddeebbeeeec
        bbbeeebbdbeebbdebbddeebddeebbeeeec
        bbbeeebbbeeebbdeebddeebbdee44deeec
        bbbeeebbbbebbbbebbbbebbbddbbddeeec
        bbbeeeeebbeeebebbebebeebebbbbbeeec
        dddbeeeeebeebebbeebbbebbebbbbeeecc
        ddddeeeeeebeebbbebbbbbbbbbbbdddddd
        ddddbebbebbeeeeedbeeeebbeebbdd1d11
        dddddeeeeeebeeeebbbebebbbddddd1d11
        dddddbeeeeeeeeeebbbbbbbbbddddd1d11
        ddddddeeeeeeeebbeebebbbbbddddd1d11
        ddddbbeeeeeeeeeeeebbbebbdddddd1d11
        ddbbbbcceeeeeebbbbbbbbbbdddddd1dd1
        ddddbbbbbccbbbbbbbbbbbbbdddddd1dd1
        ddddbbbbbbbbbbbbbbbbbbdddddddd1dd1
        `, SpriteKind.Food)
    option2.setPosition(77, 22)
    option2.setStayInScreen(true)
    option3 = sprites.create(img`
        fffffffffffffffffffffffffffff
        ffffffffffffffffeb7fbffffffff
        ffffffffffffffeebbbbebbffffff
        fffffffffffffeeeeeebbbbffdfff
        fffffffffffffeef2bbedd1ddbfff
        ffffffffffffffffbbbbdddddbfff
        fffffffffffffffffbbbbddd1ffff
        fffffffffffffffffbbbdddddffff
        ffffdddddddfffb1bbbbddddddfff
        fffdddddddddddddbbbbddddbbfff
        ffddddddddddddbbbbbbddbbbbfff
        f1dddddddddddbbbbbbbddbbbbfff
        fbbdddddddddbbbbbbbbddddfffff
        ffbbbddddddddbdbbbbddfddfffff
        ffbbbddddddbbbdddbddfffffffff
        ffbbbdddddbbbbddddddfffffffff
        fbbbbdbdddbbdbddddddfffffffff
        fbdbbbbbbbbbdbddddd3fffffffff
        ffdbbbbbbbbbdddddddffffffffff
        fbbbbebbbbbddddddddffffffffff
        fbbbbebffffddddbddfffffffffff
        fbbbfbbffffbdd2bddfffffffffff
        fbbbfeebfffbbbbddbfffffffffff
        fbbbfeebfffbbe4bbffffffffffff
        fbbbffeeeffbbdfbdffffffffffff
        fbecffeffffbddfbddfffffffffff
        fffcfffffffbddfbddbffffffffff
        fffffffffffbbbceeeeffffffffff
        fffffffffffccccffffffffffffff
        fffffffffffffffffffffffffffff
        `, SpriteKind.Food)
    option3.setPosition(129, 22)
    option3.setStayInScreen(true)
    option4 = sprites.create(img`
        111111111111111111111111111111111111111
        111111111111111111111111111111111111111
        111111111111111111111111111111111111111
        111111111111111111111111111111111111111
        111111111111111111111111111111111111111
        111111111111111111111111111111111111111
        111111111111111111111111111111111111111
        111111111111111111111111111111111111111
        111111111111111111111111111111111111111
        111111111d44d4d44dddd111111111111111111
        1111111444ddd44444444ddd111111111111111
        111111d444444444444444d4dd1111111111111
        11111444d4444444444ed4d444dd11111111111
        11114dd44444444ddd4444d4444dd1111111111
        111dd444444444d44dd44ddd4444dd111111111
        11144444444ddddd44ddd444dd4eddd11111111
        11144444d44e4e444d4ddddd4d4444d11111111
        111444444444d4e4ddddddbd4d4d444d1111111
        1114e44444444444444dd44ddd4d4de41111111
        111d444444ed4444ddddd44dd4dd44444111111
        111144444e444444e4ddd44dd444444ded11111
        1111b44444444444444dddd44d444444d411111
        11111d44e444444e4444444444444c444411111
        11111144444e4444444444444444444444d1111
        111111144444444444444444e444444444d1111
        11111111d444e44444444444ee444e444441111
        111111111b4444e444444d44e4444e444441111
        111111111dde44444444ddd4444444444411111
        1111111111ddd44444d4444eee44444e4411111
        11111111111dddd444444d44444444444d11111
        111111111111dddd444ddd44444e444dd111111
        11111111111111dddbdd44444dd4d4dd1111111
        111111111111111ddddddddd4d44dddd1111111
        11111111111111111dddddddddddddd11111111
        11111111111111111111ddddddddd1111111111
        111111111111111111111111111111111111111
        111111111111111111111111111111111111111
        111111111111111111111111111111111111111
        111111111111111111111111111111111111111
        111111111111111111111111111111111111111
        `, SpriteKind.Food)
    option4.setPosition(28, 74)
    option4.setStayInScreen(true)
    option5 = sprites.create(img`
        ddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddbdddddddddddddddddddddddd
        dddddddddddfcbbbdbbdddddddddddddddddddd
        ddddddddddddfbddbbcdddddddddddddddddddd
        ddddddddddddebbbdefbddddddddddddddddddd
        dddddddddddeeebbd4ecbdddddddddddddddddd
        dddddddddddeefdffdeceddddddddddddddbddd
        dddddddddddeefeecbbebddde4fddddbbbbdddd
        ddddddddddd4ec4eeddbeebfeebbbbcceebdddd
        dddddddddddefdeeeedddddeeedbbccccebbddd
        ddddddddddefdddeeddddedffebbbbcccbedddd
        ddddddddddeedddeeddd4ebfffdbbccccbebddd
        dddddddddddddddeedd14edfff4bbcbdbdecddd
        ddddddddddddddd4bed144efffdbccbccddcddd
        ddddddddddddddd4dfc14effffebcddbdddbddd
        ddddddddddddddd4eff1deffffedcdddddddddd
        dddddddddddddddbbffddeffffebcdddddddddd
        ddddddddddddddddeffdefffdfebcdddddddddd
        ddddddddddddddddfefcbbdddfddcdddddddddd
        ddddddddddddddbeecdddddddeddcdddddddddd
        dddddddddddddbecdddddddddeddccddbbbddbd
        dddddddddddddceddddddddddedddcddddbbbbb
        ddddddddddddddddddddddbbdbdddbdbbbbbbbb
        ddddddddddddcdbdddbdbddbbbbbbdbbbbbbbbb
        ddddddddddddbbbebbdbdbbebbbbbebe444444e
        dddddddbdddbbdbeebbbbbebbbbbee444ee44ee
        ddddddddddbcbbdddbbbb44e444eeee4eee44ee
        dddbdbdbbbbbbb4deb444e4e4e4eeeeeeee444e
        bddbdbbbbb444444444e44eeeeeeeeeeee44444
        bbbbbbbe4444444eeeee44eeeeeeee444eee4e4
        4bbee4eee444444e4ee444eeeeee4e4e4eeee4e
        e4eee4e4eeee4e4eeeeeee4eeeeeeee4eeeee4e
        eeee4e4e444e4e4e4ee4ee4eee4eeeeeee4e4ee
        `, SpriteKind.Food)
    option5.setPosition(110, 74)
    option5.setStayInScreen(true)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    if (otherSprite == option1) {
        option1.startEffect(effects.confetti, 500)
        player2.sayText("Prem A per confimar", 800, false)
        if (controller.A.isPressed()) {
            enter_quantitat_objecte()
            pi_a_gallina()
        }
    } else {
        if (otherSprite == option2) {
            option2.startEffect(effects.confetti, 500)
            player2.sayText("Prem A per confimar", 800, false)
            if (controller.A.isPressed()) {
                enter_quantitat_objecte()
                pi_a_ous()
            }
        } else {
            if (otherSprite == option3) {
                option3.startEffect(effects.confetti, 500)
                player2.sayText("Prem A per confimar", 800, false)
                if (controller.A.isPressed()) {
                    enter_quantitat_objecte()
                    pi_a_cabra()
                }
            } else {
                if (otherSprite == option4) {
                    option4.startEffect(effects.confetti, 500)
                    player2.sayText("Prem A per confimar", 800, false)
                    if (controller.A.isPressed()) {
                        enter_quantitat_objecte()
                        pi_a_patata()
                    }
                } else {
                    if (otherSprite == option5) {
                        option5.startEffect(effects.confetti, 500)
                        player2.sayText("Prem A per confimar", 800, false)
                        if (controller.A.isPressed()) {
                            enter_quantitat_objecte()
                            pi_a_cavall()
                        }
                    } else {
                    	
                    }
                }
            }
        }
    }
})
function pi_a_cabra () {
    result = Math.round(quantitat_obj * 5)
    game.showLongText(result, DialogLayout.Center)
}
function pi_a_ous () {
    result = Math.round(quantitat_obj * 3)
    game.showLongText(result, DialogLayout.Center)
}
function pi_a_patata () {
    result = quantitat_obj * 2
    game.showLongText(result, DialogLayout.Center)
}
let option5: Sprite = null
let option4: Sprite = null
let option3: Sprite = null
let option2: Sprite = null
let option1: Sprite = null
let result = 0
let player2: Sprite = null
let quantitat_obj = 0
scene.setBackgroundImage(img`
    999ccccc66776666666676c6777777fc6f99999999999999999999999999999999999999999999999999999999999999999999999dd999999999999999999999999999999dddddddddd1d9999999999
    99ecc76c777777e66666667677777c7776c999999999999999999999999999999999999999999999999999999999999999999999dddddd999999999999999999999999999dddd1dddddd99999999999
    c9cc6766776676c66676666666c666667e76c9999999999999999999999999999999999999999999999999999999999999999999dddd1dd99999999999999999999999999dddd1dddddd99999999999
    cc6667767777677ecc666666666766666666f999999999999999999999999999999999999999999999999999999999999999999ddddddd1dd999999999999999999999999ddd1ddddd1999999999999
    cc6766677777777766cc666cc666c666c676c999999999999999999999999999999999999999999999999999999999999999999ddddddddd1dd999999999999999999999dddddddd11d999999999999
    ccc687c76777776c6cccc66c66666c66c66c999999999999999999999999999999999999999999999999999999999999999999ddddddddddd11dd9999999999999999999dddd1dddddd999999999999
    6c66677677777776e7c766c66c6cccccc66c6c9999999999999999999999999999999999999999999999999999999999999999d11ddd1dddddd1ddd99999999999999999dddd1ddddd9999999999999
    e6ccc66677e76cc7cc6666cccccc6cccccccccc99999999999999999999999999999999999999999999999999999999999999dddd11dddddddd1dd1dd999999999999999d1d1dddddd9999999999999
    c6ccc7c677c6776cc666ccc6cccc6cc6cc66cc99999999999999999999999999999999999999999999999999999999999999ddddddddddddddddddd1ddd999999999999bddddddd1d99999999999999
    ccc66cc776c677777f7ecccccc66cccccccccc99999999999999999999999999999999999999999999999999999999999999dddddd1dd11dddddddddd1ddd9999999999dddddddd1d99999999999999
    c66ccc6ccc66ccccc6cccccccccccccc6cccccc999999999999999999999999999999999999999999999999999999999999dddddd1dddddddddddddddddddd999999999ddddddddd999999999999999
    e66ccc6ccc6cccccc6ccc6ccccccccccccccccc9999999999999999999999999999999999999999999999999999999999999ddddddddddddddddddddd1dd11dd999999dddd1ddd1d999999999999999
    cbcccccccc7e66cc6cccccccccccccccccccccf9999999999999999999999999999999999999999999999999999999999999999ddddddddd1dd11ddd1ddddddddd9999bdd1dddddd999999999999999
    ccccccccccccccccccccccccccccfccccccccc99ecc99999969999999999999999999999999999999999999999999999999999999ddddddddddddd1dddddd1dd1ddd99bbddddd1d9999999999999999
    cccccccfcccccccccccccccccccccfccccc6ccccccccc696f6c699999999999999999999999999999999999999999999999999999999ddddddddddd1dddddddddd1db999bbbdddd9999999999999999
    cccccccccccccccccc7ecccccccccccccccccccccccc6c6c676769999999999999999999999999999999999999999999999999999999999ddddddddddddddddddddbd99999ebbd99999999999999999
    cccccccccccccccfccccccccccccccccccccccccccccfc6c677ec999999999999999999999999999999999999999999999999999999999999ddddd1ddddddddddddb999bcee99999999999999999999
    ccccccccccccccccccccccccfcfcccccccccccccccccf666767776c6991111199999999999999999999999999999999999999999999999999999bdddddddddd1ddb999eceeee9999999999999999999
    ccccccccccccccccccfccccc66ccccc66866cccccccc667667777776611111119911999999999999999999999999999999999999999999999999999bddddddddddeb9ec22eefcb99999999999999999
    cccccccccbcccccccccccc6c66c6c6cc7677cccccccccc6667777c77cb111111111111999999999999999999999999999999999999999999999999999dbddddddbccce22eee2efbddd9999999999999
    ccccccccc99ccfcccc9dcc76666cccc67e76cc8ccccccc666666666766c11111111111199999999999999999999999999999999999999999999999999999ddddb9ccecceee2222bd111ddd999999999
    ccfccfccccccc6cccccfc767666c666767777676cccccc66cc6666cc66c11111111111119999999999999999999999999999999999999999999999999999999dbefee2eeef2222dddd1d11dddd99999
    786ccccccccccccccccc67c66666676677777676ccc6ccc6666c6c6c6cd111111111111199999999999999999999999999999999999999999999999999999999efeee22eefcc22dddd1ddd11ddddd99
    c7e7777ecfccccccc76c7777766666666cc77776cc7cc76cc6cc6ccccc6c1111111111111999999999999999999999999999999999999999999999999999999efee2222ee2ecccdddd1dddd1dd111dd
    6c7766ccccfcccccc7667776767666666666666766cc66cccccc6cccc6cc1111111111111111199999999999999999999999999999999999999999999999999ce222222ee222eeddddddddd1ddddd1d
    687776767cccccc66c67777777c6c66c666c668c66cffffffcc6fccccccf111111111111111111999999999999999999999999999999999999999999999999bee222222e222222d111ddddd1ddddd1d
    767cc66ccccccccc66c767777c6ccc666c66cc6c6cffffffffcccccfcccc111111111111111111111199999999999999999999999999999999999999999999ee222222ee222222ddd1dd1dddddddd1d
    667eccccccccc6c66676777776cc766c6c6ccccc6ccccfffffcccccccccc111111111111111111111119999999999999999999999999999999999999999999ce2222b2ce222222ddd1ddd111ddddd1d
    c6ccfccffccccc6cccc6777777c66cccccc66cccc6ccccffffccfccccccc11111111111111111111111999999999999999999999999999999999999999999ee222241dde222222ddd1ddddd1d1ddd1d
    ccccccff9ccccccc6cc77cc777767ccccc6cccccccccccffffcccccccbcccffb1111111111111111111999999999999999999999999999999999999999999ce22ffddddde222ffffddddddd1dd11ddd
    ffffccfffccccccc6c6cc66ccccccccccccccccccccccccfffffccccccccccccb11111111111111111199999999999999999999999999999999999999999ee222ffddd1dde22fffffeddddd1dddd11d
    fffffffffccccccccccccccccccccc6ccccccccccccccccffffffcfcccccccccc1111111111111111199999999999999999999999999999999999999999dc2222fb1ddddd222fffffeeeddd1ddddd1d
    ffcfffffffccccc8ccccccc7cc6cccccccccccccccccfffffffffcccccccccccb1111111111111111999999999999999999999999999999999999999991ee2222fddddddd222fffff22eeed1dddd11d
    ffffffffffcccccbcccccccccccccfccccccccccccfffffffcfccffccccccccfcf11111111119111999999999999999999999999999999999999999999bc22222c1dd1ddb224fffff2222eebdddd1dd
    ffffcfccccb9deeecccccccccccc7ffcccccccccccfffffffcccccccccccfcc1cd99911111199999999999999999999999999999999999999999999111ee22222dd1d1dde222ccccf2222ee9cddd1dd
    ffffccc6ccccbcceccccccccccccccffccccccccccfffffffccccccccffff9999999999119999999999999999999999999999999999999999999991111ce222221ddd1dd2222222222222229999dddd
    ffffccc66cccc6cf666c8ccfffcccccccccccccccccffcf9fcccccccfffffc9999999999999999999999999999999999999999999999999999999111111e2222bddd1ddd22222222222222e999999dd
    9fffc66666c6f6cc6767ccccccccffcfffccfc8cf9bccef9ccccccccfffffffffffc9999999999999999999999999999999999999999999999991111111e2222dddddddb22222222222222e99999999
    99dcc766c6cccc6c77776ccccccc7eeccfffffc7ef99dcfbc9cccccccffffffffffff999999999999999999999999999999999999999999999991111111eeeeb1ddddddeeeeeeeeeeeeeeec99999999
    99cc7676666c6666767777676cc67c66ccccffcccff9dcffb9ccccccccfffffffffff999999999999999999999999999999999999999999999911111111ceeed1dd1ddd22f242f22f2f2efb99999999
    cc76766766666766677777776cccccccc76cfcfcccc6defc999fcf9cfcffff9fffffb99999999999999999999999ddddd99999999999911111111111111cf2edddd1ddd2ffe2eeeee2cfefb11999999
    cc67c76766666667677c77777cccccc6c76cbffcfffbdefc9999999999fffffcffffffc9999999999999999999dd11dd1ddb99999999111111111111111ceebddddd1def2f2fec222fe2efd11999999
    76c77676c766666666c66666767cccc7777cccfff9b99efc99999999999cfffffffffff9999999999999999ddd11eeeecb11ddd99999111111111111111cefddddddddef2f2f2fe22feeff111199999
    77777767ecc66666666666666666ccc7c67cffffeed99eec999bff99999999ffffff6c999999999999999dd11dccd1d11bee11ddb999111111111111111cfedddddddde4ef24ffefe2ecec111119999
    6c77e7777e6cc666cc66c666c666ccccc6666cc99dee9eec99bffff99999999fffff99999999999999ddd11eee11cffffc1deeb11ddd911111111111111feb1dddddde22efe22f22f2f2efd11119999
    77767777fccccc6666666cc6c66cccccccc67cccc9debeccfffffff99999999cffc9999999999999dd11dfcd1de22222222ed1bee11ddb111111111111dcfdddd1dddffeeeeeeeeeeeeeeed11111119
    76777777767c766c66ccccccc6c6ccccccccccccc99deeccfccffccfdcc999999999999999999ddd11ecb11eefbbbbbbbbbbfcb11ecd11ddd1111111111ebdd1ddddd222222222222222ee111111111
    7677777767c66ccccccc66cccc6cccccccccc6ff99994eccfccc7efffffb999999999999999dd111fc11beeee2bbbbbbbbbbeeeeed1dce111db11111111eddddd1ddbe22222222222222e2111111111
    c677cc777c7ccccc6cc6cccccc6ccccccccc99999999decccccccc66c6fb999999999999ddd11beb1dceeeeeeebbbbbbbbbbeeeeeeec11bcd11dd111111edddd1ddde222222222222222e2111111111
    ccc6c66cccccccccccc6cccccccccccc999999999999decccccccc6c7c99999999999999b11fe11beeeeeeeee2bbbbbbbbbbeeeeeeeeeef11cbd1b99991bdddddddd2222242222222222e2111111111
    c6cc6c7cccc6ccccccccccccccccccccc99999999999decccccccc7777cc999999999999d1e1deeeeeeeeeeee2bbbbbbbbbbeeeeeeeeeeeeed1e1d99999ddddddddd222222222eeee222e2111111111
    cccc7cf6cc6ccc6ccccccccccccfccccc7c999999999decb9ecbcc6c67cf99999999999b1b1ffffeeeeeeeeeffbbbb11bbbbeffffffffffffffb11d99991ddd1dddc22222222effff222e2111111111
    cccccccccccccccccccccfcccccf7c6c7eec99999999deecc9ecccccc67ecc999999999d1c1eeeeeeeeeeeeeeeb9991111bbeeeeeeeeeeeeeee1b1d999dd1ddddddf22222222effff22222d11111119
    ccccccccccccc99ccccccccccccfc67777cccf999999dcccb9cccccccccccc99999999d1ddceeefffffffffffe1111111111effffffffffffffbb119991dd1dddddf22222222efffce2222d99911199
    fcccccccccccc999ccccccccccc77767676cc7999999dccc9999cccccc999999999999d1c1eeeeeeeeeeee2222bbbbbbbbbb2222eeeeeeeeeeee1b1b9d1dddddddbf22222222effffc2222b99999999
    9ecccccccccccc99cccccccccc66776ccccb6c9df999dccc999968999999999999111d11bbffffffffffeeeeeeeeeeeeeeeeeeeeeeffffffffff1c119ddddd1dddff22222222efffff2222b99999999
    96c8cc999ecccc9e9bccccccccc677677ccccccfcc99decc96fc67ec9999999999111b1c1eeeeeeee2222222222222222222222222222eeeeeeefdd1bdddddddddff22222222efffff2222b99999999
    9999999999cc969c9dccccccccfc77cccccccccc9999decb9cc67cc7ec9999999991111edeeeee222222222222222222222222222222222eeeeee1c1ddddd1ddddfc222222222e22222222c99999999
    999999996ccc99999deccccccccccc68cc6cffcc9999deccccc7c6777cc999999999b1e1fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffed11dddd1ddde22222222222222222222e99999999
    99999999cc6999999deeccccccccccccccfc69999999dec8c687776c68c79999999911e1eee2222222222222222222222222222222222222222eee1e1dddddddd222222222222222222222e99999999
    99999999999999999deecccccccccccccccc99999999deccccc67677cc6ccc99999d1bdffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffcb11bddddddee2222222222222222222e99999999
    99999999999999999deecc9fffccccccccc699999999deccc7ef77cccccccb9999911c1eee22222222222222222222222222222222222222222eeee1b1d2ddddbe22222222222222222222299999999
    99999999999999999deeccfff9999cccc6b999999999deccc8cccccccccfc99999d1dbcfffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffdc11e2edd2e22222222222222222222299999999
    99999999999999999deeccccc9999999999999999999decccfccccc6cc99999999d1c1eee111111111e22222221111111111e222222d11111111beee1b1b222e2222222222222222222222299999999
    99999999999999999deeccccb9999999999999999999decbbfcccccccc9999999911bbeee1feb1ecdbe22222221eccddcbe12222222dbccb1ecd1eee1c1122222222222222222222222222299999999
    99999999999999999deecccc99999999999999999999decbfc999fc6999999999d1e1eeee1cec1ebfde2e222221cefddbfc12222222dbecc1eef1eeecdd1b2222222222222222222222222299999999
    99999999999999999deecccc66ffc999999999999999decccb99999999999999911e1eeeb1fff1fffde22222221fffddfcf12222222dbfff1fff1eeee1e112222222222222222222222222299999999
    99999999999999999deecccc666ffc99999999999999deccc999999999999999d1bdffffb11dd1dd11eeeeeeee1ddd11d111eeeeeeed1ddd1dd11efffcbd1e222222222222222222222222e99999999
    99999999999999999deecccc6666ff999999999999994eccc99999999999999911c12ee241fff1cbcbe22222221cffddcef12222222dbfff1ccf1e2eee1e1d222222222222222222222222ed9999999
    99999999999999999deeeccc6666ffff9999999999994eccc99999999999999d1ddcfffeb1ffc1cfcdeeeeeeee1cffddcfc1eeeeeeedbfff1cfc1eefffbb112222222222222222222222222b9999999
    99999999999999999beeccc666666ffff69999999999deecb9999999999999911c1eee224111111111e222222211111111112222222d111111111e2eeee1e1b222222222222222222222222e9999999
    999999999999999967eeccc66666ffffff6999996666deccb999999999999991dbbeee22eeeeeeeeeee2222222eeeeeeeeee2222222eeeeeeeeeee22eee1e11222222222222222222222222e9999999
    999999999999999667eeccc66666fffffff999966666deccb9999999999999d1e1eee2222222222222222222222222222222222222222222222222222eeebb1b22222222222222222222222e9999999
    999999999999996667eeccc666666f6fffff69666666deccb999999999999911e1e22222222222222222222222222222222222222222222222222222222ebc1122222222222222222222222e9999999
    999999999999966667eeccc66666666ffffff6666666deccc699999999999d1ee1eee2222222222222222222222222222222222222222222222222222eeebcd1e2222222222222222222222e9999999
    999999999999666666eeccc666666666ffffff666666deccc666699999996d1cc1e22222222222222222222222222222222222222222222222222222222bbee1d2222222222222222222222e9999999
    999999999996666666eeccc666666666fffffff66666decfc66666666666666661efeeeeeeebddddddddddddddddddddddddddddddddddddddeeeeeeeefbb22222222222222222222222222ed999999
    999999999966666666eeccc666666666fffffff66666decfc66666666666666661e22222222b111111111111111111d1111111111111111111b22222222eb22222222222222222222222222eb999999
    999999999666666666eeccc6666666666ffffff66666decfc66666666666666661e22222222b111111111111111111d1111111111111111111b22222222bb22222222222222222222222222ee666666
    99999999666666666ceecccc666666666fffffff6666defcc66666666666666661e22222222b111222222222222b11d111e222222222222111b22222222eb22222222222222222222222222ee666666
    99999966666666666ceefccc666666666ffffffff666befcb66666666666666661e22222222b11112222222222d111d1111e222222222e1111b22222222bb2222222222222222222222e22e2e66f66f
    99999666666666666ceecccc666666666fffffffff66deccb66666666666666661e22222222b11d1122222222d1111d11111e2222222e11d11e22222222bb2222222222222222222222e22e2efff6ff
    99996666666666666ceccccc6666666666ffffffffffdefcb66666666666666661e22222222b11ed11222222d11211d111e11e22222e11eb11b22222222bb2222222222222222222222222e2effffff
    99966666666666666feccccc666666666fffffffffffdcfcc666666666f6666661eeeeeeeeeb11e2d112222d112211d1112e11b222e11e2b11eeeeeeeeeeb2222222222222222222222222e2effffff
    6666666666666666ffeecccc66666c66ffffffffffff4efcc666666666f66ffff1e22222222b11e22b11e211122211111122e11b2e11e22b11b22222222eb2222222222222222222222222e2effffff
    6666666666666666feeecccc66fffffffffffffffffceffcc66666666ffffffff1eeeeeeeeed11e222b111112222111111222e11b11e222b11beeeeeeeebb222222222222222222222222222eefffff
    666666666f66666ffbeeccccfffffffffffffffffffcfeccc66666666ffffffff1e22222222d11e2222e11d2222211111122222111e2222b11b22222222bb222222222222222222222222222e2fffff
    6666666fff6666fffdeeecccfffffffffffffffffffeeeefcc6666666ffffffff1eee222222d11e22221111e22221111112222e111d2222b11b22222222bb222222222222222222222222222e2fffff
    fffffffff6fffffffdeeecccfffffffffffffffffffde4eccc666666fffffffff1eeeeeeeeed11e22e111b11e222111111222b11e11d222b11eeeeeeeeeeb22222222222222222222222222e2efffff
    ffffffffffff77777deeeccc77777777777efffffff4e4cfcceee666fffecffff1e222222eed11e22111e2b11ee211111122b11e2e11122b11b22222222bb222222222222222222222e2e22eeecffff
    ffffff777777777774e4cccc77777777777777777744e4eccfcefffffffceffff1eeeeeeeeed11ee111e2eeb11e2111111eb11ee22e1112b11eeeeeeeeebb222222222222222222222e2222eeee4444
    7777777777777777eee4cccf777777777777717777d4ee4ccecbeeeeeeecbefff1eeeeeeeeed11e111eeeeeee11e111111d11feeeeee111b11beeeeeeeebb22222222224222222222222e2e2eee4444
    77777777777777774fedcccfc777777777777777eedeeebeeeeeccccccfeefcff1eeeeeeeeed1111deeeeeeeee1111111111ceeeeeeee11111eeeeeeeeebbeeee2222245554eeeeeeeeeeeeeeee4444
    7777777777777777deedccccc77777777777777ecedeceeccfcece77777ce77771eeeeeeeeed1111eeeeeeeeeee11111111eeeeeeeeeee1111beeeeeeeeebeffeeeef544455554e222ee2eeefee444e
    77777777777d777e4fe4ccccc7777777eeeeeeedceeeccccffcecccc777cc77771eeeeeeeeed11d222222222e2ee111111eeeeeeeeeee2e111eeeeeeeeebb2ee222255444455555e22ee22eeeeee444
    7777777777777774eefeccccfc77777777eeedcececcceeeffcecffcccccc77771eeeeeeeeed11111111111111111111111111111111111111eeeeeeeeeeb2ee2224544444455555454e2eeeeeee444
    777777777777777ddeefbcccfc777ee7777eeecfceeeeeeeeece7777777ce77771eeeeeeeeed11111111111111111111111111111111111111beeeeeeeebb2ee222544444444555554554222ecee444
    77777777777777444ededcfcffc77cc7eeecfe77ce77777777ce7777777ce777d11111111111111111111111111111111111111111111111111111111111b4444444444444445555544554444444444
    77777777777777ddeededccccfc77feeccc77777ce77777777cee777777cee77777777777777fee2e444444444444444444444444444444444444444444444444454444444444555554555444444444
    77777777777eedddeeeedcfffcceececc7777777ce7777777cebceeeeeceecc777777fceeeeeeeeeeeeeee4444444444444444444444444444444444445ddd544454444444445445555e55544444444
    77effffffffed4deedeeccfceecccceeff777777ce77d77cecccffcce77ccfffcceeeeee444444444444444444444444444444444444444444444445555554445544444444444444455445555555555
    7ffffffffedd4d4eeecceeeeccfffceefffffe7ecc77eeef77cc7777777cceee444444444444444444444444444444444444444444444444444455555554e4555554444e4444e444455555555555555
    77efffeed44ed4eefececcccffcfcceffffffff7cbceef7777cccccfceec4444444444444444444444444444444444444444444444444444444455555444555555554444445eee55555555555555555
    77777777eee4eeeeeececcfffcfffcefffee777eeece77777eeeee444444444444444444444444444444444444444444444444444444444444444444444555555444444444455555555555555555555
    77777777fccceeeccccccccfc7777ce77777eeecce7777eeeefee4444444444444444444444444444444444444444444444444444444444444444444444444454444ee4445555555555555555555444
    77777777feeeecce77ee7e7777777ee777eeece7cc777ccfee444444444444444444444444444444444444444444444444444444444444444444444444444444444eeee455555555555555555544444
    7777eeeefeccc77777ee777777777eeeeecc77eee77effee4444444444444444444444444444444444444444444444444444444444444444444444444e444444444eeeee54444444555554544444444
    eeeeecccce77777777ee777777777ebecc777777eefeee444444444444444444444444444444444444444444444444444444444444444444444444444e444444444eeee454444444444544444444444
    ecccc777fe77777777ee777777eeeee7777777eeeee444444444444444444444444444444444444444444444444444444444444444444444444444444e44444444eeeee454444444444544444444444
    fe777777ee77777777ee7777eecccce77eeeeeee444444444444444444444444444444444444444444444444444444444444444444444444444444444e44444444eeee4454444444444544444444444
    77777777ee77717777ee7eeecce77ecceee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444e44444444eeeee444444444444544444444444
    7777d177ee77777777eeeccc77777eef6ee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444ee4444444eeeee454444444444544444444eee
    77777777ee777777eecece77777eeeee4444444444444444444444444444444444444444444444444444444d4444444444444444444444444444444444444e44e44e4444544444444444444444eeeee
    77777777ee777eeeeeee777eeeeee4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444454444444444544eeeeeeeee
    77777777ee7eeeccc77ee777efee444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444544444444445eeeeeeeeeee
    77777777eeeeec7777eeeefeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444445444444444454eeeeeeeeee
    77777eeececf777e77eeeeeeeeeeeeeeeeeee444444444444444444444444444444444444444444444444444444444444444444444444444444444444444ee4444444444555444444445eeeeeeeeeee
    7eeeeeccce7777777777777eee6feeeeeeeeeeeeee4444444444444e4444444444444444444444444444444444444444444444444444444444444444eeeeeee444eeeeee444445554444eee4eeeeeee
    eeeccc77ee777777777777777777777777777eeeeeeeeeeee444444444444444444444444444444444444444444444444444444444444444444444eeeeeeeeeeeeeeeeeeeeeeeee44444eeeeeeeeeee
    cce77777ee7777777777777777777777777777777777777776eeeeeeeeeee444444444444444444444444444444444444444444444444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    `)
game.splash("Benvingutss veins i veines", "")
show_player()
