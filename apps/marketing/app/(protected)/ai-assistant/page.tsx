'use client';

import { Brain, Send } from 'lucide-react';
import { useState } from 'react';

import { PageHeader } from '@/components/marketing/page-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const suggestions = [
  'Analyze competitor ad strategy in Melbourne',
  'Generate a LinkedIn post about outsourced PM',
  'Propose budget for Q3 agency acquisition campaign',
  'Which platform has the best ROI this month?',
  'Create a 30-second TikTok script about AI inspections',
];

const sampleResponses: Record<string, string> = {
  default:
    'I can help with market research, content creation, budget planning, campaign optimization, and lead analysis. Try one of the suggested prompts or ask a specific marketing question.',
};

export default function AiAssistantPage() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; content: string }[]>([
    {
      role: 'assistant',
      content:
        'Welcome to the CROSSUB AI Marketing Assistant. I can research markets, analyze competitors, generate content, plan budgets, and optimize campaigns. What would you like to work on?',
    },
  ]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = input.trim();
    setMessages((prev) => [
      ...prev,
      { role: 'user', content: userMessage },
      {
        role: 'assistant',
        content:
          sampleResponses[userMessage] ??
          `Based on current market intelligence for Australia (NSW/VIC), I recommend focusing on agency acquisition campaigns via LinkedIn with a budget of AUD 1,500/month. Expected CPL: AUD 40, ROI: 4.2×. Would you like me to generate a full campaign proposal for management approval?`,
      },
    ]);
    setInput('');
  };

  return (
    <div className="space-y-8">
      <PageHeader
        title="AI Marketing Assistant"
        description="Ask the AI to research markets, generate content, plan campaigns, or analyze performance."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="size-4 text-primary" />
              Chat
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="max-h-96 space-y-4 overflow-y-auto">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`rounded-lg p-3 text-sm ${
                    msg.role === 'user'
                      ? 'ml-8 bg-primary/10 text-foreground'
                      : 'mr-8 bg-secondary text-foreground'
                  }`}
                >
                  {msg.content}
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <Input
                placeholder="Ask about markets, content, budgets, or campaigns..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              />
              <Button onClick={handleSend} className="shrink-0">
                <Send className="size-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Suggested Prompts</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {suggestions.map((suggestion) => (
              <button
                key={suggestion}
                type="button"
                onClick={() => setInput(suggestion)}
                className="w-full rounded-lg border border-border p-3 text-left text-sm transition-colors hover:bg-secondary/50"
              >
                {suggestion}
              </button>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
