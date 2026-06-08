'use client';

import { Check, Globe, MapPin } from 'lucide-react';

import { PageHeader } from '@/components/marketing/page-header';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  CITY_OPTIONS,
  COUNTRY_OPTIONS,
  selectedMarket,
} from '@/lib/mock-data';

export default function MarketsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Market Selection"
        description="Select target markets by country, state, and city for AI-driven campaign planning."
      />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="size-4 text-primary" />
            Active Target Market
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Badge variant="success" className="gap-1">
              <Check className="size-3" />
              {COUNTRY_OPTIONS.find((c) => c.id === selectedMarket.country)?.label}
            </Badge>
            {selectedMarket.states.map((state) => (
              <Badge key={state} variant="muted">{state}</Badge>
            ))}
            {selectedMarket.cities.map((city) => (
              <Badge key={city} variant="muted" className="gap-1">
                <MapPin className="size-3" />
                {city}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        {COUNTRY_OPTIONS.map((country) => (
          <Card
            key={country.id}
            className={country.id === selectedMarket.country ? 'border-primary/50' : ''}
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">{country.label}</CardTitle>
                {country.id === selectedMarket.country && (
                  <Badge variant="success">Selected</Badge>
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="mb-2 text-xs font-medium text-muted-foreground">States / Regions</p>
                <div className="flex flex-wrap gap-1.5">
                  {country.states.map((state) => (
                    <Badge
                      key={state}
                      variant={
                        selectedMarket.country === country.id &&
                        selectedMarket.states.includes(state)
                          ? 'success'
                          : 'muted'
                      }
                    >
                      {state}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-2 text-xs font-medium text-muted-foreground">Cities</p>
                <div className="flex flex-wrap gap-1.5">
                  {(CITY_OPTIONS[country.id] ?? []).map((city) => (
                    <Badge
                      key={city}
                      variant={
                        selectedMarket.country === country.id &&
                        selectedMarket.cities.includes(city)
                          ? 'success'
                          : 'muted'
                      }
                    >
                      {city}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
