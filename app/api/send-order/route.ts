import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, phone } = body

    // Validate input
    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Ism va telefon raqam kiritilishi shart' },
        { status: 400 }
      )
    }

    // Get Telegram credentials from environment
    const botToken = process.env.TELEGRAM_BOT_TOKEN
    const chatId = process.env.TELEGRAM_CHAT_ID

    if (!botToken || !chatId) {
      console.error('Telegram bot token yoki chat ID topilmadi')
      return NextResponse.json(
        { error: 'Telegram konfiguratsiyasi noto\'g\'ri' },
        { status: 500 }
      )
    }

    // Format message for Telegram
    const message = `
🔔 <b>YANGI BUYURTMA - WORMSTOP</b>

👤 <b>Ism:</b> ${name}
📱 <b>Telefon:</b> ${phone}

📅 <b>Vaqt:</b> ${new Date().toLocaleString('uz-UZ', { 
      timeZone: 'Asia/Tashkent',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    })}

💰 <b>Narx:</b> 24,000 сўм
    `.trim()

    // Send message to Telegram
    const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`
    
    const response = await fetch(telegramApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'HTML',
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      console.error('Telegram API xatosi:', data)
      return NextResponse.json(
        { error: 'Xabar yuborishda xatolik yuz berdi' },
        { status: 500 }
      )
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Buyurtma qabul qilindi!' 
    })

  } catch (error) {
    console.error('Server xatosi:', error)
    return NextResponse.json(
      { error: 'Serverda xatolik yuz berdi' },
      { status: 500 }
    )
  }
}
